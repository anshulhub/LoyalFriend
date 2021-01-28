const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
    },
    date : {
        type : String,
        default : Date(Date.now()).toString()
    }
});

//Hashing password
userSchema.pre("save", async function(next){
if (this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
}
    next();
});

const Register = new mongoose.model("Register",userSchema);

module.exports = Register;