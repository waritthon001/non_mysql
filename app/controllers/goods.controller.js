const db = require("../models");
const Goods = db.goods;

exports.add = (req, res) => {
  // Save User to Database
  Goods.create({
    id: req.body.id,
    name: req.body.name,
    hungry: req.body.hungry,
    mental: req.body.mental,
  })
    .then(goods => {
    res.send({ message: "Goods was add successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.all = (req, res) => {
  Goods.findAll()
    .then(goods => {
      if (!goods) {
        return res.status(404).send({ message: "User Not found." });
      }
        res.status(200)

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};