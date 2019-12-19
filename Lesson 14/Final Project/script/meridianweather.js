//this is to provide the current temperature for the temple



let meridianRequest = new XMLHttpRequest();

let meridianWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5600685&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';

meridianRequest.open('Get', meridianWeather, true);

meridianRequest.send();



meridianRequest.onload =  function () {

    let weatherData = JSON.parse(meridianRequest.responseText);



    document.getElementById('meridian').innerHTML = "CURRENT TEMPERATURE: " + weatherData.main.temp + " &deg;F";

    document.getElementById('forecast1').innerHTML = "WEATHER CONDITION: " + weatherData.weather[0].description;

}

