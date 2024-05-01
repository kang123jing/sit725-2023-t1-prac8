const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://s223765611:d6J1r5lR7i9tvF3w@sit725-2023-t1-prac4.epyv66e.mongodb.net";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
}

module.exports = client;