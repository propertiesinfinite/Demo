const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json())


const cors = require('cors')

app.use(cors())

const MONGO_URI = "mongodb+srv://fake-api:LmfjH-jxPQN4TSN@samuvel.b2tb1.mongodb.net/task_api?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Connection error:', err.message));


// app.get('/' , (req , res) =>{
//     res.send("Welcome World")
// })

app.use("/public", express.static("public"));

app.use(require('./routes/ProductRoute'))
app.use(require('./routes/UserRoute'))
app.use(require('./routes/CartRoute'))

app.listen(8000, () => {
  console.log("Connect");
});
