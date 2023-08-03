var fs = require('fs');
const express = require('express');
const app = express();
const upload = require('express-fileupload')
const morgan = require('morgan')
const bodyParser = require("body-parser");
require('dotenv').config()
var cors = require('cors')
const multer = require('multer');
const csv = require('csv-parser');

var SB_Routes = require('./src/Routes/Routes');

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors());
app.use(express.json());
app.use(upload());
app.use(morgan("dev"))
app.use(express.static('./src/uploads/'))

app.use(SB_Routes);

var PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening at localhost:${PORT}`);
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Api Not Found",
  });
});