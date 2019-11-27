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