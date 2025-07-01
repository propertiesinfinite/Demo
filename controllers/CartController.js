const CartModel = require('../models/CartModel')

exports.insert = [
    (req,res)=>{
        const cart = new CartModel({
            userId:req.body.userId,
            date:req.body.date,
            products:req.body.products.map(p=>({
                productId:p.productId,
                quantity:p.quantity
            }))
        })

        cart.save().then((saved)=>res.send(saved)).catch((err)=>res.send(err))
    }
]



exports.list = [
  (req, res) => {
    CartModel.find()
      .populate('userId', 'username email')
      .populate('products.productId', 'title price')
      .then((carts) => res.send(carts))
      .catch((err) => res.status(500).send(err));
  }
];


