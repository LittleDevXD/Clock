setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hand-hour]');
const minuteHand = document.querySelector('[data-hand-minute]');
const secondHand = document.querySelector('[data-hand-second]');

function setClock() {
    let currentTime = new Date();
    let secondRatio = currentTime.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentTime.getHours()) / 12;
    // console.log(secondRatio, minuteRatio, hourRatio)
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio *360)
}   

setClock()