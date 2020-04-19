const MongoClient = require('mongodb').MongoClient;
const uri = process.env.dbUrl;
const client = new MongoClient(uri, { useNewUrlParser: true  , useUnifiedTopology : true});

var dbconnection =  async () =>{
    await client.connect();
    let connection = await client.db("AlgoFocus").collection('SubmissionData');
    return connection;
}

var dbWrite = async (data) =>{
    let collection = await dbconnection();
    let resp = await collection.insertOne(data);
    return resp;
}

var dbFetch = async () =>{
    let collection = await dbconnection();
    let resp = await collection.find({}).toArray();
    return resp;
}

var dbImagestore = async (data , email)=>{
    let collection = await dbconnection();
    var myquery = { email: email };
    var newvalues = { $set: {picUrl: data } };
    let resp = await collection.updateOne(myquery , newvalues);
    return resp;
}

module.exports.dbWrite =  dbWrite ;
module.exports.dbFetch = dbFetch ;
module.exports.dbImagestore = dbImagestore ;