const routes = require("express").Router();

const User = require("./app/models/User");

const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

routes.get("/sessions", (req, res) => {
  console.log("pliajdialdjlaw==============", User.create());
});

module.exports = routes;
