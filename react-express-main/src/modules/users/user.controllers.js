const HTTPStatus = require("http-status");

const User = require("./user.model");
async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.user.toAuthJSON());

  return next();
}
module.exports = {
  signUp: signUp,
  login: login
};
