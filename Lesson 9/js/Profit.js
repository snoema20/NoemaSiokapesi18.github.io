const requestUrl = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

//const requestUrl = 'latter-day-prophets.json';

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            //Create Elements
            let section = document.createElement('section');

            //Create header
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            //create prophet date of birth
            let dob = document.createElement('p');
            dob.textContent = 'Date of Birth: ' + prophets[i].birthdate;

            //Create prophet place of birth
            let pob = document.createElement('p');
            pob.textContent = 'Place of Birth: ' + prophets[i].birthplace;

            //Create Image
            let img = document.createElement('img');
            img.setAttribute('src', prophets[i].imageurl);            
            img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);

            //Add Elements
            section.appendChild(h2);
            section.appendChild(dob);
            section.appendChild(pob);            
            section.appendChild(img);
            document.querySelector('div.cards').appendChild(section);
        }
    });