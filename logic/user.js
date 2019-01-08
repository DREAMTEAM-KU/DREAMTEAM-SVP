const fs = require("fs");

const db = __dirname + "/../db/users.json";

function listUsers() {
  const users = fs.readFileSync(db, "utf8");
  return users;
}

function showbyID(id) {
  const users = JSON.parse(fs.readFileSync(db, "utf8"));
  const keys = Object.keys(users);

  const filteredUsers = {};
  keys.forEach(key => {
    const user = users[key];
    if (parseInt(user.id) === parseInt(id)) {
      filteredUsers[key] = user;
    }
  });

  return filteredUsers;
}

function addUser(user) {
  const users = JSON.parse(fs.readFileSync(db, "utf8"));
  const id = user.id;
  users[`user${id}`] = user;
  return users;
}

function addMultiUser(iusers) {
  const users = JSON.parse(fs.readFileSync(db, "utf8"));
  // get current id
  const keys = Object.keys(users);
  let maxVal = -1;

  keys.forEach(key => {
    const currentId = users[key].id;
    if (maxVal < users[key].id) {
      maxVal = currentId;
    }
  });

  // assign to iusers
  iusers.forEach(user => {
    ++maxVal;
    users[`user${maxVal}`] = { ...user, id: maxVal };
  });

  return users;
}

function deleteUser(id) {
  const users = fs.readFileSync(db, "utf8");
  return users;
}

module.exports = {
  listUsers,
  showbyID,
  addUser,
  addMultiUser,
  deleteUser
};
