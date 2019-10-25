
var ws = parseFloat(document.getElementById("wind").innerHTML);     
var th =  parseInt(document.getElementById("temph").innerHTML);   
var tl =  parseInt(document.getElementById("templ").innerHTML);  


var t  =  (th + tl) / 2;
var s = Math.pow(ws, 0.16); 
var f = 35.74 + (0.6215 * t - 35.75 * s) + (0.4275 * t * s); 

document.getElementById("windChill").innerHTML = Math.round(f * 10) / 10 + '°F';