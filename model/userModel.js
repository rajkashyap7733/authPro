const mongoose = require("mongoose")

//schema 
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true,"phone number is required"]
    },
    usertype :{
        type:String,
        required:[true,"user type is required"],
        default:"client",
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
    }

},{timestamps:true})

//export
module.exports = mongoose.model("User",userSchema)