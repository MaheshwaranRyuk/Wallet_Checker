var express = require("express");
var router = express.Router();
var Controller = require("../../MVC/Controller/walletController");

router.post("/", Controller.saveQuest);

module.exports = router;