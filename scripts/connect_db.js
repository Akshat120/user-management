const { MongoClient } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

module.exports = client;
