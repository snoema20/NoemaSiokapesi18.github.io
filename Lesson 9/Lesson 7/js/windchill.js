var tempF = parseFloat(document.getElementsByClassName("temp")[0].textContent);
var speed = parseFloat(document.getElementsByClassName("windSpeed")[0].textContent);
var f = calcWindChill(tempF, speed);
	 document.getElementsByClassName("wChill")[0].textContent - f;

function calcWindChill(tempF, speed) {
	var t = tempF;
    var s = speed;
   
    if (t >=50 && s <= 3) { 
        return 0;
    }
    

	else {
        var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s,0.16));
        return f;
    }
}