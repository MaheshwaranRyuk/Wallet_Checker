const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestSchema = Schema({
  address:{
    type:String,
  },
  tier_info:{
    type:String,
  },
  createDt: {
    type: Date,
    default: Date.now(),
  },
  modifyDt: {
    type: Date,
    default: Date.now(),
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_delete: {
    type: Boolean,
    default: false,
  },
});

module.exports = Article = mongoose.model("quest", QuestSchema);
