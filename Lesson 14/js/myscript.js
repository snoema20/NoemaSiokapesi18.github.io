//Function to get current year

document.getElementById('Year').innerHTML = new Date().getFullYear();



//Get document last modified date

document.getElementById('lastUpdated').innerHTML = "Last Updated: " + document.lastModified;



function toggleMenu() {

	document.getElementsByClassName("menu-ul")[0].classList.toggle("responsive");

}

