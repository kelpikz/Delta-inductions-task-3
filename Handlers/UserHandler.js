const indexUserHandler = require("./Users/indexUserHandler");
const { newUserHandler, createUserHandler } = require("./Users/newUserHandler");
const showUserHandler = require("./Users/ShowUserHandler");
const {
  editUserHandler,
  updateUserHandler,
} = require("./Users/editUserHandler");
const deleteUserHandler = require("./Users/deleteUserHandler");

let User = {};

User.indexUserHandler = indexUserHandler;
User.showUserHandler = showUserHandler;
User.newUserHandler = newUserHandler;
User.createUserHandler = createUserHandler;
User.editUserHandler = editUserHandler;
User.updateUserHandler = updateUserHandler;
User.deleteUserHandler = deleteUserHandler;

module.exports = User;
