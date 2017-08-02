$(document).ready(function(){
	var apiKey = "21be608db8133ef7599441c0801e9e22";
	
	var forcastByZip = "api.openweathermap.org/data/2.5/forecast?zip=";
	
	var zipCode = "12549";
	
	var apiCall = "http://" + forcastByZip + zipCode + "&appid=" +apiKey;
	
	$.getJSON(apiCall, weatherCallback);
});

function weatherCallback(weatherData){
	console.log(weatherData);
	getDate(weatherData, 0);
	console.log(weatherData.city.name, weatherData.city.country, weatherData.list[0].weather[0].description);
	getTemp(weatherData, 0);
}

function getTemp(weatherData, index){
	console.log(weatherData.list[index].main.temp);
}

function getDate(weatherData, index){
	console.log(weatherData.list[index].dt_txt);
}