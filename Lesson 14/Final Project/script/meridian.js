//This is to get the closed dates for the temple



let events = document.querySelector('#closed');



let requestURL = 'https://hudsonsu17.github.io/assignments/hotelsite/json/closed.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();



request.onload = function () {

    let getData = request.response;

    let temple = getData['temples'];



    for (let i = 0; i < temple.length; i++) {

        if (temple[i].name == "Meridian") {

            let meridianList = temple[i].closed;

            let dateTime = 0; 



            for (let j = 0; j < meridianList.length; j++) {

                let date = meridianList[dateTime];

                dateTime++;



            let eventSection = document.createElement('div');

            let h4List = document.createElement('h4');

            h4List.textContent = date;

            eventSection.appendChild(h4List);

            events.appendChild(eventSection);

            }

        }

    }

}



//This is to get the session dates for the temple



let output = document.querySelector('#sessions');



let getURL = 'https://hudsonsu17.github.io/assignments/hotelsite/json/sessions.json';

let grab = new XMLHttpRequest();

grab.open('GET', getURL);

grab.responseType = 'json';

grab.send();



grab.onload = function () {

    let grabData = grab.response;

    let temples = grabData['times'];



    for (let i = 0; i < temples.length; i++) {

        if (temples[i].name == "Meridian") {

            let templeList = temples[i].session;

            let time = 0; 



            for (let j = 0; j < templeList.length; j++) {

                let date = templeList[time];

                time++;



            let sessionTime = document.createElement('div');

            let times = document.createElement('h4');

            times.textContent = date;

            sessionTime.appendChild(times);

            output.appendChild(sessionTime);

            }

        }

    }

}