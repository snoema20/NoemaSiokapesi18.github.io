//This is to get the current date to put into the footer of the Town Page//

let today = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let year = today.getFullYear();

let month = months[today.getMonth()];

let week = weekday[today.getDay()];

let day = today.getDate();





let date = week + ", " + day + " " + month + " " + year;



document.getElementById('currentdate').innerHTML = date;

