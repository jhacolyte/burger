var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    // var hbsObject = {
    //   burgers: data
    // };
    console.log(data);
    res.render("index", { burger: data });
  });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log("id", id);

  burger.updateOne(id, function() {
    res.redirect("/");
  });
});

module.exports = router;
