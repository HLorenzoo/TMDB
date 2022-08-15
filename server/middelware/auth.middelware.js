require("dotenv").config();

class AuthMiddelware {
  static validateAuth(req, res, next) {
    const token = req.cookie.token;
    if (!token) return res.sendStatus(401);

    const { user } = jwt.verify(token, process.env.SECRET);
    if (!user) return res.sendStatus(401);

    req.user = user;

    next();
  }
}
module.exports = AuthMiddelware;
