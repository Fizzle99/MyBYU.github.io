/*Forecast JSON*/

var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var forecast = request.response;
  showForecast(forecast);
}

function showForecast(jsonObj) {
var forecast = jsonObj[]

}