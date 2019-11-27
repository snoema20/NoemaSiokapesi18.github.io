// Get Page Name
var pagePath=window.location.pathname;
var pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1);
var cityID, apiForecastURL, apiWeatherURL, lat, lon;
var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
//Preston Weather information
if (pageName == "preston.html") {
    cityID = "5604473";
    apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + unitCode + "&APPID=" + appID;
    apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unitCode + "&APPID=" + appID;
} else if (pageName == "sodasprings.html"){
    cityID = "5607916";
    apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + unitCode + "&APPID=" + appID;
    apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unitCode + "&APPID=" + appID;
} else {
    lat = "42.037147";
    lon = "-111.395942";
    apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=" + unitCode + "&APPID=" + appID;
    apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + unitCode + "&APPID=" + appID;
}

fetch(apiWeatherURL)
    .then((responseURL) => responseURL.json())
    .then((jsonWeatherObject) => {
        const jsonCurrentWeatherObject = jsonWeatherObject;
        const weatherJsonRoot = jsonCurrentWeatherObject.weather[0];
    
        // Get Weather Summary
        document.getElementById('current-weather').textContent = weatherJsonRoot.main;
        document.getElementById('temp').textContent = jsonCurrentWeatherObject.main.temp_max;
        document.getElementById('humid-percent').textContent = jsonCurrentWeatherObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsonCurrentWeatherObject.wind.speed;
    
    });

fetch(apiForecastURL)
  .then((httpResponse) => httpResponse.json())
  .then((weatherJsonObject) => {
    //console.log(weatherJsonObject.list);
    
    const jsonObject = weatherJsonObject.list;
    //Generate Week Days Dynamically
    function weekDays(date){
        const days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat');
        const today = date.getDay();
        return days[today];
    }

    const weekDaysHeader = document.createElement('tr');
    const weatherIcon = document.createElement('tr');
    const weatherTemp = document.createElement('tr');
    
    for(var i = 0; i < jsonObject.length; i++){
        let dt_txt_field = jsonObject[i].dt_txt;
        if (dt_txt_field.includes("18:00:00")){  
            // Generate table headers
            const nextDay = new Date(dt_txt_field);
            nextDay.setDate(nextDay.getDate());
            const nextWeekDay = weekDays(nextDay);
            const tableHeader = document.createElement("th");
            tableHeader.textContent = nextWeekDay;  
            weekDaysHeader.appendChild(tableHeader);  
            document.querySelector('thead.table-header').appendChild(weekDaysHeader);

            // Generate weather icons
            const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject[i].weather[0].icon + '.png'; 
            const desc = jsonObject[i].weather[0].description;
            const imageTableData = document.createElement("td");  
            const weatherImage = document.createElement("img");
            weatherImage.setAttribute('src', imagesrc); 
            weatherImage.setAttribute('alt', desc);
            imageTableData.appendChild(weatherImage);
            weatherIcon.appendChild(imageTableData);  
            document.querySelector('thead.table-header').appendChild(weatherIcon);

            // Generate weather temperature
            const temperature = document.createElement("td");
            temperature.innerHTML = jsonObject[i].main.temp + "&#8457;";
            weatherTemp.appendChild(temperature);  
            document.querySelector('thead.table-header').appendChild(weatherTemp);
        }
    }
});

//WindChill calculator
var WindChill = document.getElementById("wind-chill");

function getWindChill(){
    var tempF = parseFloat(document.getElementById("temp").textContent);
    var speed = parseFloat(document.getElementById("wind-speed").textContent);
    if(tempF <= 50 && speed > 3)
        return Math.floor(calculateWindChill(tempF, speed)) + "&#8457;";
    else 
        return 'N/A';
}

function calculateWindChill(tempF, speed){
    var powerSpeed = Math.pow(speed, 0.16);
    var mtempF = 0.6215 * tempF;
    var mpowerSpeed = 35.75 * powerSpeed;
    var mtempF_mpowerSpeed = 0.4275 * tempF * powerSpeed;
    var wChillFomula = 35.74 + mtempF - mpowerSpeed + mtempF_mpowerSpeed;
    return wChillFomula;
}

// Load wind chill value after all resources are loaded
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        WindChill.innerHTML = getWindChill();
    }
    
    if (event.target.readyState === "responsive") {
        WindChill.innerHTML = getWindChill();
    }
});