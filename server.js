let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = require('./routes/routes');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cats', router);

// app.get('/', (req, res) => {
//     res.render('index.html');
// });

// app.post('/api/cat', async (req, res) => {
//     let cat = req.body;
//     let result = await postCat(cat);
//     client.close();
//     res.json({statusCode: 201, message: 'success', data: result});
// });

// app.get('/api/cats', async (req, res) => {
//     let result = await getAllCats();
//     client.close();
//     res.json({statusCode: 201, message: 'success', data: result});
// });

// async function postCat(cat) {
//     await client.connect();
//     let collection = await client.db().collection('Cats');
//     return collection.insertOne(cat);
// }

// async function getAllCats() {
//     await client.connect();
//     let collection = await client.db().collection('Cats');
//     return collection.find().toArray();
// }

app.listen(port, () => {
    console.log('server started');
});