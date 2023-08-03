var express = require("express");
var app = express();
const path = require("path");

//Routers
var Quest = require("./AdminRouter/Quest");
// var Search = require("./AdminRouter/Search");
// var User = require("./FronEndRouter/User");
// var QuestDetails = require("./FronEndRouter/QuestDetails");

//Quest
app.use("/admin/quest", Quest);



// Image URL Start
app.use("/Quest", express.static(path.join(__dirname + `/../uploads/admin/`)));

module.exports = app;
