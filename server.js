let express = require('express');
let app = express();
let port = process.env.port || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sit7252nd:admin@cluster0.scy2vud.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
}

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/api/cat', async (req, res) => {
    let cat = req.body;
    let result = await postCat(cat);
    client.close();
    res.json({statusCode: 201, message: 'success', data: result});
});

async function postCat(cat) {
    client.connect();
    let collection = client.db().collection('Cats');
    return collection.insertOne(cat);
}

app.get('/api/cats', async (req, res) => {
    let result = await getAllCats();
    console.log(result);
    client.close();
    res.json({statusCode: 201, message: 'success', data: result});
});

async function getAllCats() {
    client.connect();
    let collection = client.db().collection('Cats');
    return collection.find().toArray();
}

app.listen(port, () => {
    console.log('server started');
    //run().catch(console.dir);;
});