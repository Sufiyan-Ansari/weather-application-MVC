const request = require('request');

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