const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

// mongodb+srv://anshulhub:anshul98@cluster0.l04us.mongodb.net/loyalRegisteration?retryWrites=true&w=majority
const uri = "mongodb+srv://anshulhub:anshul98@cluster0.l04us.mongodb.net/loyalRegisteration?retryWrites=true&w=majority";
mongoose.connect(uri || process.env.MONGODB_URI || "mongodb://localhost:27017/loyalRegisteration",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    // const collection = mongoose.db("loyalRegisteration").collection("registers");
    // mongoose.close();
    console.log("connected to db");
}).catch(()=>{
    console.log("db not connected");
})


