const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/authController");

router.post("/sign-up", register);
router.post("/log-in", login);

module.exports = router;
