/*Forecast JSON*/

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "api.openweathermap.org/data/2.5/forecast?id={5604473}";
weatherRequest.open('GET', apiURLstring, true); 
weatherRequest.send();

weatherRequest.onload = function() {
    for (var i = 0; i < weatherRequestData.list.length; i++) {
        
     }
}
