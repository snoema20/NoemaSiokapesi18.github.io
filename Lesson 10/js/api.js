let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=5c3b98170fe906a29c997bd6dc935716';
weatherRequest.open('get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}