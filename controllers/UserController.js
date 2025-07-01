const UserModel = require("../models/UserModel");

exports.insert = [
  (req, res) => {
    const user = new UserModel({
      address: {
        geolocation: {
          lat: Number(req.body.lat),
          long: Number(req.body.long),
        },
        city: req.body.city,
        street: req.body.street,
        number: Number(req.body.number),
        zipcode: Number(req.body.zipcode),
      },
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      name: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },
      phone: Number(req.body.phone),
    });
    user
      .save()
      .then((saved) => res.send(saved))
      .catch((er) => res.send(er));
  },
];

exports.list = [
  (req, res) =>
    UserModel.find()
      .then((saved) => res.send(saved))
      .catch((er) => res.send(er)),
];

exports.login = [
  (req, res) => {
    UserModel.findOne({
      username: req.body.username,
      password: req.body.password,
    }).then((users)=>{users?res.send(users):res.send(false)}).catch((er)=>{res.send(er)});
  },
];
