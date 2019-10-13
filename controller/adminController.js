exports.GetWeatherPage = (req,res,next)=>{
    res.render('weatherView',{ pageTitle : 'Weather Report ::'});
};