const db = require(`../models/index.js`);
/**
 * Class Users Controller
 */
class UsersController {
  /**
   *
   * @param {*} req
   * @param {*} res
   */

  creer(req, res) {
    res.render("auth/signup");
  }
  signup(req, res) {
    db.Users.create(req.body).then(users => res.send("I am in POST signup"));
  }
}

module.exports = UsersController;
