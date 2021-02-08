const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = require("../../controllers/userController");

router.route("/login").post(userController.loginUser);

router.route("/register").post(userController.createUser);

router.route("/auth").get(userController.authCheck);

module.exports = router;