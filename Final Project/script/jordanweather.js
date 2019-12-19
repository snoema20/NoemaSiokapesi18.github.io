

let jordanRequest = new XMLHttpRequest();

let jordanWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5781765&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';

jordanRequest.open('Get', jordanWeather, true);

jordanRequest.send();



jordanRequest.onload =  function () {

    let weatherData = JSON.parse(jordanRequest.responseText);



    document.getElementById('jordanriver').innerHTML = "CURRENT TEMPERATURE: " + weatherData.main.temp + " &deg;F";

    document.getElementById('forecast2').innerHTML = "WEATHER CONDITION: " + weatherData.weather[0].description;

}