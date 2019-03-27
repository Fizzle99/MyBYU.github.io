	var temperature = parseFloat(document.getElementById('currentTemp').innerHTML);
    var windSpeed = parseFloat(document.getElementById('currentWindSpeed').innerHTML);
    var calc = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, .16) + .4275 * temperature * Math.pow(windSpeed, .16);

    document.getElementById("chillResult").innerHTML = "Wind Chill: " + calc.toFixed(2);

	