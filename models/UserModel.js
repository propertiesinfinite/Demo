const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    address:{
        geolocation:{
            lat:{type:Number , required:true},
            long:{type:Number , required:true}
        },
        city:{type:String , required:true},
        street:{type:String , required:true},
        number:{type:Number , required:true},
        zipcode:{type:Number , required:true},
    },
    email:{type:String , required:true},
    username:{type:String , required:true},
    password:{type:String , required:true},
    name:{
        firstname : {type:String , required:true},
        lastname:{type:String , required:true}
    },
    phone:{type:Number , required:true}
})

const UserModel = mongoose.model("user" , userShema)

module.exports = UserModel