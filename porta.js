const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const door = document.getElementById ('door');

function doorOn () {
    door.src = "portaberta.png"
}

turnOn.addEventListener ('click', doorOn)