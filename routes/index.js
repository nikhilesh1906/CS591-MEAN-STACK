let express = require('express');
let router = express.Router();
let request = require('request');
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
            console.log(weather);
            res.render('weather', { degrees: weather.main.temp, city: weather.name, country: weather.sys.country })
        }
    })
});

module.exports = router;
