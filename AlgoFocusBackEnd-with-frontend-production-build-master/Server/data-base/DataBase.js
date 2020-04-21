const MongoClient = require('mongodb').MongoClient;
const uri = process.env.dbUrl;
const client = new MongoClient(uri, { useNewUrlParser: true  , useUnifiedTopology : true});

var dbconnection =  async () =>{
    await client.connect();
    let connection = await client.db("Dots");
    return connection;
}

var dbWrite = async (data , collection) =>{
    let db = await dbconnection();
    let resp = await db.collection(`${collection}`).insertOne(data);
    return resp;
}

var dbFetch = async (data , collection) =>{
    let db = await dbconnection();
    let resp = await db.collection(`${collection}`).find(data).toArray();
    return resp;
}


module.exports.dbWrite =  dbWrite ;
module.exports.dbFetch = dbFetch ;
