const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const door = document.getElementById ('door');

function isdoorBroken () {
    return door.src.indexOf ('bu') > -1
}

function doorOn () {
    if (!isdoorBroken () ) {
        door.src = "portaberta.png";
    }
    
}

function doorOff () {
    if (!isdoorBroken () ) {
        door.src = "portafechada.png";
    }
   
}

function doorBroken() {
    door.src = "bu.png";
}

turnOn.addEventListener ('click', doorOn);
turnOff.addEventListener ('click' , doorOff);
door.addEventListener ( 'mouseover', doorOn);
door.addEventListener ('mouseleave', doorOff);
door.addEventListener ('dblclick', doorBroken);

