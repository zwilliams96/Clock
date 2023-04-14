//Variabless
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
//Functions

function setDigital() {
    var date = new Date();
    var elm = document.getElementById("time");
    var s = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    elm.innerHTML = s;
}

function setBinary() {
    var date = new Date();
    var elm = document.getElementById("binary");
    var hour = date.getHours().toString(2);
    var min = date.getMinutes().toString(2);
    var sec = date.getSeconds().toString(2);
    var s = `${hour} : ${min} : ${sec}`;
    elm.innerHTML = s;
}

function setOctal() {
    var date = new Date();
    var elm = document.getElementById("octal");
    var hour = date.getHours().toString(8);
    var min = date.getMinutes().toString(8);
    var sec = date.getSeconds().toString(8);
    var s = `${hour} : ${min} : ${sec}`;
    elm.innerHTML = s;
}

function setHex() {
    var date = new Date();
    var elm = document.getElementById("hex");
    var hour = date.getHours().toString(16);
    var min = date.getMinutes().toString(16);
    var sec = date.getSeconds().toString(16);
    var s = `${hour} : ${min} : ${sec}`;
    elm.innerHTML = s;
}

function rotate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function display() {
    setDigital();
    setBinary();
    setOctal();
    setHex();
    rotate();
}

setInterval(display, 1000);