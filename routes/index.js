const express = require("express");
const {
  listUsers,
  showbyID,
  addUser,
  addMultiUser,
  deleteUser
} = require("../logic/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("api server");
});

router.get("/listUsers", (req, res) => {
  const users = listUsers();
  res.setHeader("Content-Type", "application/json");
  res.end(users);
});

router.get("/showbyID/:id", (req, res) => {
  const id = req.params.id;
  const user = showbyID(id);
  res.setHeader("Content-Type", "application/json");
  res.send(user);
});

router.post("/addUser", (req, res) => {
  const { name, password, profession, id } = req.body;
  const user = { name, password, profession, id };
  const users = addUser(user);

  res.setHeader("Content-Type", "application/json");
  res.send(users);
});

router.post("/addMultiUser", (req, res) => {
  const users = req.body.users;
  const output = addMultiUser(users);

  res.setHeader("Content-Type", "application/json");
  res.send(output);
});

router.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  const users = deleteUser(id);

  res.setHeader("Content-Type", "application/json");
  res.send(users);
});

module.exports = router;
