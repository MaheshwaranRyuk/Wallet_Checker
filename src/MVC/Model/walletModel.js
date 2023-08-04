var con = require("../../../database/connection");
var con = require("../../../database/connection");
const TableQuest = require("../Collections/walletCollection");

async function saveQuest(request) {
  try {
    if (!request || !request.body || !request.body.address) {
      return {
        msg: "No direct Access Allowed",
        statusCode: 500,
      };
    }

    const data = request.body;
    console.log(data);

    const response = await TableQuest.find({ address: data.address });

    if (response.length > 0) {
      return {
        msg: "Whitelisted",
        list: response,
        statusCode: 200,
      };
    } else {
      return {
        msg: "Not Whitelisted",
        statusCode: 200,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      msg: error.message,
      statusCode: 500,
    };
  }
}

module.exports = {
  saveQuest,
};
