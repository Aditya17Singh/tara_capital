var express = require("express");
const { NotExtended } = require("http-errors");
var router = express.Router();

var News = require("../models/News");

//List News
router.get("/", (req, res, next) => {
  News.find({}, (err, news) => {
    if (err) return next(err);
    res.render("news", { news });
  });
});

//create news form
router.get("/new", (req, res) => {
  res.render("addNews");
});

//fetch single news
router.get("/:id", (req, res) => {
  var id = req.params.id;
  News.findById(id, (err, news) => {
    if (err) return next(err);
    res.render("newsDetails", { news });
  });
});
//create news
router.post("/", (req, res) => {
  News.create(req.body, (err) => {
    if (err) return next(err);
    res.redirect("/news");
  });
});

module.exports = router;
