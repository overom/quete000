var express = require("express");
var router = express.Router();

const UsersController = require("../controllers/UsersController");
const controller = new UsersController();

router.get("/signup", (req, res) => controller.creer(req, res));
router.post("/signup", (req, res) => {
  controller.signup(req, res);
});
module.exports = router;
