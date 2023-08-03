var QuestModel = require("../Model/QuestModel");
var jwt = require("jsonwebtoken");
var Auth = require("../Helpers/Auth");
var authorizer = require("../Helpers/Auth");


const saveQuest = async (req, res, next) => {
//   if ((await Auth.authorizer(req, res)) == true) {
    var data = await QuestModel.saveQuest(req);
    res.status(data.statusCode).send(data);
//   } else {
//     res.status(400).send({ msg: "invalid sessions" });
//   }
};


module.exports = { saveQuest};
