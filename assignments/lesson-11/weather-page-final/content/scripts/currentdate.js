

    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    document.getElementById("demo2").innerHTML = "&copy; 2020 | Attributions | Bradley James Sallee | " + days[d.getDay()] + ", " +  months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
    
 