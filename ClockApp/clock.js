//Javascript clock logic

let clock = document.getElementById("clock");
let date = document.getElementById("date");

function getTime() {
    let time = new Date();
    let hours = time.getHours() % 12;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if(hours.length < 2){
        hours = "0" + hours;
    }

    if(minutes.length < 2){
        minutes = "0" + minutes;
    }

    if(seconds.length < 2){
        seconds = "0" + seconds;
    }

    let getClock = hours + " : " + minutes + " : " + seconds;

    setInterval(getTime); //makes clock tick in browser.

    clock.textContent = getClock;
}

function getDate(){
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "Septempber", "October", "November", "December"]; //arrays
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //arrays
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    let actualDate = currentDate.getDate();
    let year = currentDate.getFullYear();

    let getDate = days[day] + " - " + months[month] + " " + actualDate + ", " + year;
    
    date.textContent = getDate;   
    
}

getTime();
getDate();
