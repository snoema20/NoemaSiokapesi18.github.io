function changeSize() {
    //Call date function
    var dateInfo = getFullDate();
    
    //Initialize elements
    var friday_banner = document.getElementById('friday-banner');
    var main_header = document.getElementById('main-header');
    var today_Date = document.getElementById('todayDate');
    var current_year = document.getElementById('current-year');

    //Initialize device width
    var device_width = window.innerWidth;

    //Friday Banner
    if (dateInfo.weekDayName == 'Friday') {
        friday_banner.style.display = "block";
        if (device_width < 320) {
            main_header.style.paddingTop = '95px';
        } else if (device_width < 768) {
            main_header.style.paddingTop = '70px';
        } else if (device_width < 960) {
            main_header.style.paddingTop = '50px';
        } else {
            main_header.style.paddingTop = '40px';
        }
    }    
    //Footer Date
    today_Date.innerHTML = dateInfo.fullDate;

    //Function to get current year
    current_year.innerHTML = dateInfo.currentYear;
}

//Add Event Listeners 
window.addEventListener('load', changeSize);
window.addEventListener('resize', changeSize);

//Resize and show banner 
changeSize();