require('dotenv').config();
var mongoose = require('mongoose')


const createConnection=mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });

module.exports = createConnection

