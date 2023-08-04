var QuestModel = require("../Model/walletModel");


const saveQuest = async (req, res, next) => {
    var data = await QuestModel.saveQuest(req);
    res.status(data.statusCode).send(data);
};


module.exports = { saveQuest};
