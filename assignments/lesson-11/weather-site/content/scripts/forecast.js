/*Forecast JSON*/

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "api.openweathermap.org/data/2.5/forecast?id={5604473}";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
var weatherRequestData = 
    for (var i = 0; i < weatherRequestData.list.length; i++) {
        var x = forecastData.list[i].dt_txt;
        var y = x.includes('18:00:00');
        if (y == true) {
           
        } continue;
     }
}
