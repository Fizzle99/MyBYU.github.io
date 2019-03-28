/*Forecast JSON*/

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
let weatherData = JSON.parse(weatherRequest.responseText);
console.log(weatherData);

document.getElementById('currentTemp').innerHTML = weatherData.main.temp_max;
document.getElementById('currentHumidity').innerHTML = weatherData.main.humidity;
document.getElementById('currentWindSpeed').innerHTML = weatherData.wind.speed;
}
