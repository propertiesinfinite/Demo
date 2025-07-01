const ProductModel = require("../models/ProductModel");


const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploader = multer({ storage: storage });

exports.insert = [
  uploader.single("image"),
  (req, res) => {
    const product = new ProductModel({
      title: req.body.title,
      price: Number(req.body.price),
      description: req.body.description,
      category: req.body.category,
      image: req.file ? req.file.filename : null,
     rating : {
         rate: Number(req.body.rate),
        count: Number(req.body.count)
     }
    });
    product.save() .then((saved) => res.status(201).send(saved)
    ).catch((er)=>{
        res.send("Err" , er.message)
    })
  },
];


exports.list = [
    (req,res)=>{
        ProductModel.find().then((saved)=>res.send(saved)).catch((er)=>res.send("Err" , er.message))
    }
]
