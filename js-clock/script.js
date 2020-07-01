const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const form = document.getElementById("zone-form");
const log = document.getElementById('log');


function formSubmit(event){
    log.textContent = `The current timezone is ${event.timeSTamp}`;
}



form.addEventListener('submit', formSubmit)

function changeTimeZone(date, zone){
    const newDate = new Date(date.toLocaleDateString("en-US", {timeZone: "America/New_York"}));
}


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);