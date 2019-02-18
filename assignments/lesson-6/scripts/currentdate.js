
function compileDate() {
var day = "Monday";
var date = "18";
var month = "February";
var year = "2019";
document.getElementById("demo").innerHTML = "&copy; 2020 | Attributions | Bradley James Sallee |" + " " + day + ", " + date + " " + month + " " + year;

}

function dynamicDate() {

    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    document.getElementById("demo2").innerHTML = "&copy; 2020 | Attributions | Bradley James Sallee | " + days[d.getDay()] + ", " + + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    
 }

function experiment() {
    document.getElementById("demo3").innerHTML = "Good stuff!";
}