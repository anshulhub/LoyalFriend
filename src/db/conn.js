const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;


// save using .env
const MONGODB_URI = "mongodb+srv://anshulhub:anshul98@cluster0.l04us.mongodb.net/loyalRegisteration?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/loyalRegisteration",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connected to db");
}).catch(()=>{
    console.log("db not connected");
})


