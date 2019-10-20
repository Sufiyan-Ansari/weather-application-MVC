const express = require('express');

const app = express();

const port = process.env.PORT||3000;

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use(express.static('public'));



const WeatherController = require('./controller/weatherController');

app.get('/',WeatherController.getWeatherController);

app.post('/',WeatherController.postWeatherController)

app.listen(port,()=>{console.log(`Listening on Port ${port}`)});