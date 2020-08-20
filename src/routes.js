const routes = require("express").Router();
const { User } = require("./app/models");

console.log("HEREE");
User.create({
  name: "Matheus",
  email: "matheusblizard@gmail.com",
  password_hash: "137182381823",
});

module.exports = routes;
