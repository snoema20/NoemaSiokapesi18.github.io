// INPUT VARIABLES
var ws = parseFloat(document.getElementById("wind").innerHTML);     //Wind Speed
var th =  parseInt(document.getElementById("temph").innerHTML);   //Air Temparature
var tl =  parseInt(document.getElementById("templ").innerHTML);   //Air Temparature

// MATH PORTION
var t  =  (th + tl) / 2;
var s = Math.pow(ws, 0.16); 
var f = 35.74 + (0.6215 * t - 35.75 * s) + (0.4275 * t * s); //Wind Chill Factor Formula

document.getElementById("windChill").innerHTML = Math.round(f * 10) / 10 + '°F';