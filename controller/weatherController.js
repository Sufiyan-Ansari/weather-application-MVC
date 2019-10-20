const request = require('request');

exports.getWeatherController = (req,res,next)=>{
    res.render('weatherView' , {weather:null,error:null});
};

exports.postWeatherController = (req,res,next) =>{
    // console.log(req.body.city);
    // res.render('weatherView');
    let city = req.body.city;
    let apiKey = '030dc4036d149e23bbd7bdf5d4422485';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    request(url,(error,response,body)=>{
        if(error)
        {
            res.render('weatherView',{weather:null,error:'Error Please try again!'});

        }
        else
        {
            let weather = JSON.parse(body);
            if(weather.main == undefined)
            {
                res.render('weatherView',{weather : null,error:'Error Please try again!'});

            }
            else
            {
                let weatherText = `Its ${weather.main.temp} degrees in ${weather.name}`;
                res.render('weatherView',{weather : weatherText,error:null});
            }
        }
    });



}