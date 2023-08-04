require('dotenv').config();
const mongoose = require('mongoose');

async function createConnection() {
  try {
    const res = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    return res;
  } catch (error) {
    console.log("Database not connected");

    console.log(error);
    throw error;
  }
}

module.exports = createConnection;
