var option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'number',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
}

document.getElementById('currentDate').innerHTML = new Date().toLocaleString('en-US', options);
document.getElementById('copyright').textContent = new Date(document.lastModified).getFullYear();