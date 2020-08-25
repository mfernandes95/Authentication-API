const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) res.status(401).json({ message: "User not found" });

    if (!(await user.checkPassword(password)))
      res.status(401).json({ message: "Incorrect credentials" });

    // return res.json({ user });
    return res.status(200).send();
  }
}

module.exports = new SessionController();
