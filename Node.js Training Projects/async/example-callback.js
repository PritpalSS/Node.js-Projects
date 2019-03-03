var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?id=2963597&appid=2de143494c0b295cca9337e1e96b00e0&mode=json';http://api.openweathermap.org/data/2.5/weather?id=2963597&appid=2de143494c0b295cca9337e1e96b00e0&mode=json

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Unable to fetch weather.');
	} else {
		// console.log(JSON.stringify(body, null, 4));
		// It's 77.77 in Philadelphia!
		console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
	}
});

console.log('After request!');