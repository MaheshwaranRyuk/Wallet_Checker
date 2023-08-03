var express = require('express');
var router = express.Router();
var Controller = require("../../MVC/Controller/SearchController");


router.post("/", Controller.getSearchData);
router.post("/sortfilter/", Controller.getFilterData);


module.exports = router;
