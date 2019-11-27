//Get Town Event
fetch(requestURL)
.then(function(responseEvent) {
  return responseEvent.json();
})
.then(function(townJsonEvent) {
  //sconsole.table(townJsonEvent);

  const eventObj = townJsonEvent['towns'];
  const sTownEventName = document.getElementById('soda-town-header');
  for(let i = 0; i < eventObj.length; i++) {
    //Soda Springs Event
    if (eventObj[i].name == 'Soda Springs'){
      sTownEventName.innerHTML = eventObj[i].name + '&#39;s Upcoming Event:';
      for (let j = 0; j < eventObj[i].events.length; j++){
        const sEvent = document.createElement('p');
        sEvent.setAttribute('class', 'para-event');
        sEvent.textContent = eventObj[i].events[j];
        document.querySelector('div.soda-event-panel').appendChild(sEvent);
      }
      const sTownEventImage = document.createElement('picture');
      sTownEventImage.setAttribute('class', 'event-image');

      const sEventImage = document.createElement('img');
      sEventImage.setAttribute('class', 'img1');
      sEventImage.setAttribute('src', 'images/soda-event.jpg');
      sEventImage.setAttribute('alt', eventObj[i].name + ' events');
      sTownEventImage.appendChild(sEventImage);
      document.querySelector('div.soda-article-container').appendChild(sTownEventImage);
    }
  }
});