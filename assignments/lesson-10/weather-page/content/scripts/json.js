var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var townValues = request.response;
  showTowns(townValues);
}



function showTowns(jsonObj) { 
  var towns = jsonObj["towns"]; 
  
      for (var i= 0; i < towns.length; i++){
          var name = towns[i].name;
          if(name === "Preston") {
              var townName = document.createElement('h1');
              var townMotto = document.createElement('h4');
              var yearFounded = document.createElement('p');
              var population = document.createElement('p');
              var annRain = document.createElement('p');
              
  
              townName.textContent = towns[i].name;
              townMotto.textContent = towns[i].motto;
              yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
              population.textContent = 'Current Population: ' + towns[i].currentPopulation;
              annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
              
              document.getElementById("prestonTownData").appendChild(townName); document.getElementById("prestonTownData").appendChild(townMotto); document.getElementById("prestonTownData").appendChild(yearFounded); document.getElementById("prestonTownData").appendChild(population); document.getElementById("prestonTownData").appendChild(annRain); 
          }
          
          else if (name === "Soda Springs"){
            var townName = document.createElement('h1');
            var townMotto = document.createElement('h4');
            var yearFounded = document.createElement('p');
            var population = document.createElement('p');
            var annRain = document.createElement('p');
            

            townName.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            
            document.getElementById("sodaSpringsTownData").appendChild(townName); 
            document.getElementById("sodaSpringsTownData").appendChild(townMotto); 
            document.getElementById("sodaSpringsTownData").appendChild(yearFounded); 
            document.getElementById("sodaSpringsTownData").appendChild(population); 
            document.getElementById("sodaSpringsTownData").appendChild(annRain);
          }
          
          else if (name === "Fish Haven"){
            var townName = document.createElement('h1');
            var townMotto = document.createElement('h4');
            var yearFounded = document.createElement('p');
            var population = document.createElement('p');
            var annRain = document.createElement('p');
            

            townName.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Current Population: ' + towns[i].currentPopulation;
            annRain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            
            document.getElementById("fishHavenTownData").appendChild(townName); 
            document.getElementById("fishHavenTownData").appendChild(townMotto); 
            document.getElementById("fishHavenTownData").appendChild(yearFounded); 
            document.getElementById("fishHavenTownData").appendChild(population); 
            document.getElementById("fishHavenTownData").appendChild(annRain);
          }
      }
  } 