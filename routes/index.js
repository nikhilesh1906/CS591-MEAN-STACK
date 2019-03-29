var express = require('express');
var router = express.Router();
var request = require('request');
let url = 'http://api.openweathermap.org/data/2.5/weather?id=4317656&appid=0286ab29f6b6de6fcbf7dea717998071&units=imperial';
let weather = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Weather Data" });
});

router.get('/weather', function (req, res, next) {
    request(url, function (err, response, body) {
        if(err) {
            console.log('Error', err);
        }
        else {
            weather = JSON.parse(body);
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            console.log(message);
        }
    }).pipe(res); //This will pipe() the request() result into the res object and it will become the response to the original http request
    res.render('weather', { title: "Results from Weather API" });
});

module.exports = router;
