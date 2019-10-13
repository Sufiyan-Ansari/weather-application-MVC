const express = require('express');
const Router = express.Router();
const controller = require('../controller/adminController');


Router.use('/',controller.GetWeatherPage);

module.exports = Router;