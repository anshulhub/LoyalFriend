const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required :true
    },
    phone : {
        type :Number,
        required : true,
        unique :true
    },
    email : {
        type :String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;