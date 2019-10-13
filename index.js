const request = require('request');
const express = require('express');
const app = express();
app.set('views','views');
app.set('view engine' , 'ejs');
const AdminRouter = require('./route/adminRoute');

app.use(AdminRouter);





app.listen(3000);

let apiKey = '030dc4036d149e23bbd7bdf5d4422485';
//let city = 'karachi';
const argv = require('yargs').argv;
let city = argv.c||'Karachi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



request( url  , function (error , response , body)
{
    
    let weather = JSON.parse(body);
    if(error)
    {
        console.log(error);
    }
    else
    {
            let message = `It weather ${weather.main.temp} degrees in ${weather.name}`;
            console.log(message);
    }
});