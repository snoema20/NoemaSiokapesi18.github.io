let seattleRequest = new XMLHttpRequest();

let seattleWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';

seattleRequest.open('Get', seattleWeather, true);

seattleRequest.send();



seattleRequest.onload =  function () {

    let weatherData = JSON.parse(seattleRequest.responseText);



    document.getElementById('seattle').innerHTML = "CURRENT TEMPERATURE: " + weatherData.main.temp + " &deg;F";

    document.getElementById('forecast3').innerHTML = "WEATHER CONDITION: " + weatherData.weather[0].description;

}

