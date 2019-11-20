//Toggle Menu
function toggleMenu() { 
    document.getElementsByClassName("main-nav")[0].classList.toggle("responsive");  
}

//Date function
function getFullDate() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    const date = dt.getDate();
    const monthName = monthNames[dt.getMonth()];
    const dayName = dayNames[dt.getDay()];
    const fullYear = dt.getFullYear();
    const date_value = `${dayName}, ${date} ${monthName} ${fullYear}`;
    return {
        fullDate: date_value,
        weekDayName: dayName,
        currentYear: fullYear
    };
}

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
