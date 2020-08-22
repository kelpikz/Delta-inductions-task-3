const express = require("express");
const router = express.Router();

const User = require("../Handlers/UserHandler");

//* Middleware
const wrongPassword = require("../Middlewares/wrongPassword");
const isNum = require("../Middlewares/isNum");

// Index Route
router.get("/", User.indexUserHandler);

//New Route
router.get("/new", User.newUserHandler);

router.post("/", User.createUserHandler);

// Show Route
router.get("/:rollno", isNum, User.showUserHandler);
router.get("/:rollno/wrong", isNum, wrongPassword, User.showUserHandler);

// Edit Route
router.get("/:rollno/edit", isNum, User.editUserHandler);
router.get("/:rollno/edit/wrong", isNum, wrongPassword, User.editUserHandler);
router.put("/:rollno/", User.updateUserHandler);

// Delete Route
router.delete("/:rollno/", User.deleteUserHandler);

module.exports = router;
