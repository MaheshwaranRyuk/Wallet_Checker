var express = require("express");
var app = express();
const path = require("path");

//Routers
var Quest = require("./AdminRouter/wallet");


//Quest
app.use("/walletCheck", Quest);


module.exports = app;