const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/jorge", (req, res, next) => {
  res.render("jorge-view.hbs");
});

module.exports = router;
