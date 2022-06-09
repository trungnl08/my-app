const { Router } = require("express");
const {validate} = require("express-validation");

const { authLocal } = require("../../services/auth.services");
const userController = require("./user.controllers");
const userValidation = require("./user.validations");

const routes = new Router();

routes.post("/signup", userController.signUp);
routes.post("/login", authLocal, userController.login);

//google auth
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
routes.post("/api/v1/auth/google", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  });
  const { name, email, picture } = ticket.getPayload();
  const user = await db.user.upsert({
    where: { email: email },
    update: { name, picture },
    create: { name, email, picture }
  });
  req.session.userId = user.id;
  res.status(201);
  res.json(user);
});
routes.delete("/api/v1/auth/logout", async (req, res) => {
  await req.session.destroy();
  res.status(200);
  res.json({
    message: "Logged out successfully"
  });
});

module.exports = routes;
