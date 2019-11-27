//Preston Weather information
const cityID = "5604473";
const unitCode = "imperial";
const appID = "ec4187e2c652e5e5e31629577f8c5a74";
const apiResponseURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + unitCode + "&APPID=" + appID;

fetch(apiResponseURL)
  .then((httpResponse) => httpResponse.json())
  .then((weatherJsonObject) => {
    //console.log(weatherJsonObject.list);
    
    const jsonObject = weatherJsonObject.list;
    const weatherJsonRoot = jsonObject[0].weather[0];

    // Get Weather Summary
    document.getElementById('current-weather').textContent = weatherJsonRoot.main;
    document.getElementById('temp').textContent = jsonObject[0].main.temp_max;
    document.getElementById('humid-percent').textContent = jsonObject[0].main.humidity;
    document.getElementById('wind-speed').textContent = jsonObject[0].wind.speed;

    //Generate Week Days Dynamically
    function weekDays(date){
        const days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat');
        const today = date.getDay();
        return days[today];
    }

    const weekDaysHeader = document.createElement('tr');
    const weatherIcon = document.createElement('tr');
    const weatherTemp = document.createElement('tr');
    
    for(var i = 0; i <= jsonObject.length; i++){
        const dt_txt_field = jsonObject[i].dt_txt;
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


//Get Town Event
fetch(requestURL)
.then(function(responseEvent) {
  return responseEvent.json();
})
.then(function(townJsonEvent) {
  //console.table(townJsonEvent);

  const eventObj = townJsonEvent['towns'];
  const fTownEventName = document.getElementById('fish-town-header');
  for(let i = 0; i < eventObj.length; i++) {
    //fish Springs Event
    if (eventObj[i].name == 'Fish Haven'){
      fTownEventName.innerHTML = eventObj[i].name + '&#39;s Upcoming Event:';
      for (let j = 0; j < eventObj[i].events.length; j++){
        const fEvent = document.createElement('p');
        fEvent.setAttribute('class', 'para-event');
        fEvent.textContent = eventObj[i].events[j];
        document.querySelector('div.fish-event-panel').appendChild(fEvent);
      }
      const fTownEventImage = document.createElement('picture');
      fTownEventImage.setAttribute('class', 'event-image');

      const fEventImage = document.createElement('img');
      fEventImage.setAttribute('class', 'img1');
      fEventImage.setAttribute('src', 'images/fish-event.jpg');
      fEventImage.setAttribute('alt', eventObj[i].name + ' events');
      fTownEventImage.appendChild(fEventImage);
      document.querySelector('div.fish-article-container').appendChild(fTownEventImage);
    }
  }
});