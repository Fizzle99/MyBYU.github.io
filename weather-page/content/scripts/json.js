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
  var town = jsonObj['towns'];
  for(var i = 0; i < town.length; i++) {
    var myArticle = document.createElement('article');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    myH3.textContent = town[i].name;
    myPara1.textContent = 'Motto: ' + town[i].motto;
    myPara2.textContent = 'Population: ' + town[i].yearFounded;
    myPara3.textContent = 'Average Rainfall:'+ town[i].averageRainfall;
   
    myArticle.classList.add('box');
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    section.appendChild(myArticle);
  }
}