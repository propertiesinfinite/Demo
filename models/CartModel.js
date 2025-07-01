const mongoose = require('mongoose')

const cartShema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    date:{type:String , required:true},
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true
            },
            quantity:{type:Number , required:true}
        }
    ]
})


const CartModel = mongoose.model('cart' , cartShema)

module.exports = CartModel