let snowflakeRequest = new XMLHttpRequest();

let snowflakeWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5314943&units=imperial&APPID=98d88dd5f6ce4902ff35e6383cb270c3';

snowflakeRequest.open('Get', snowflakeWeather, true);

snowflakeRequest.send();



snowflakeRequest.onload =  function () {

    let weatherData = JSON.parse(snowflakeRequest.responseText);



    document.getElementById('snowflake').innerHTML = "CURRENT TEMPERATURE: " + weatherData.main.temp + " &deg;F";

    document.getElementById('forecast4').innerHTML = "WEATHER CONDITION: " + weatherData.weather[0].description;

}

