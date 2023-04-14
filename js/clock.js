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

function display() {
    setDigital();
    setBinary();
    setOctal();
    setHex();
}

setInterval(display, 1000);