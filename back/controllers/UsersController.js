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
    const { confirmPassword, ...user } = req.body;
    db.Users.create(user)
      .then(users => {
        res.status(200).json({ flash: "User has been signed up !" });
      })
      .catch(err => console.log(err.message));
  }
}

module.exports = UsersController;
