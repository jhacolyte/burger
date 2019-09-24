var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// adds a burger
router.post("/", function(req, res) {
  console.log(req.body);
  burger.insertOne(req.body.name, function() {
    res.redirect("/");
  });
});

// updates a burger entry
router.put("/:id", function(req, res) {
  console.log(req.body);
  burger.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});

// deletes a burger
router.delete("/:id", function(req, res) {
  burger.deleteOne(req.params.id, function(result) {
    res.redirect("/");
  });
});

module.exports = router;
