const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (i==1 || i == 4 || i ==5) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let em = document.createElement('em');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            em.textContent = towns[i].motto;
            p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p2.textContent = 'Population: ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'static/images/'+towns[i].photo);
            image.setAttribute('alt',towns[i].name);

            card.appendChild(h2);
            card.appendChild(em);
            card.appendChild(image);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);

            document.querySelector('div.cards').appendChild(card);
        }
        
    }  
    
});