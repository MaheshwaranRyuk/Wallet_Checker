var con = require("../../../database/connection");
var TableQuest = require("../Collections/QuestCollection");
var resultSet;
var mongoose = require("mongoose");
const bitcoin = require('bitcoinjs-lib');


async function saveQuest(request) {
  if (request != "" && typeof request !== "undefined") {
    try {
      const data = request.body;
      console.log(data);
      if (typeof data.address !== "undefined") {
          // Regular expression for BTC Taproot Wallet Address validation 
        await TableQuest.find({
          address: data.address,
          // is_delete: false,
        }).then(
          (response) => {
            resultSet = {
              msg: "success",
              list: response,
              statusCode: 200,
            };
          },
          (err) => {
            resultSet = {
              msg: err.message,
              statusCode: 500,
            };
          }
        );
      } else {
        await TableQuest.find({ is_delete: false }).then(
          (response) => {
            resultSet = {
              msg: "success",
              list: response,
              statusCode: 200,
            };
          },
          (err) => {
            resultSet = {
              msg: err.message,
              statusCode: 500,
            };
          }
        );
      }

      return resultSet;
    } catch (Error) {
      resultSet = {
        msg: Error,
        statusCode: 500,
      };
      return resultSet;
    }
  } else {
    resultSet = {
      msg: "No direct Access Allowed",
      statusCode: 500,
    };
    return resultSet;
  }
}


module.exports = {
  saveQuest
};
