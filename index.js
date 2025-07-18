const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); 

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Connection error:', err.message));

app.get('/' , (req , res) =>{
    res.send("Hello World")
})

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(require('./routes/ProductRoute'))
app.use(require('./routes/UserRoute'))
app.use(require('./routes/CartRoute'))

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
  console.log("Connect");
});
