const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const repair = document.getElementById('repair')
const lamp = document.getElementById('lamp')

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src = './imagens/ligada.jpg'
    }    
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src = './imagens/desligada.jpg'
    }    
}

function lampBreak () {
    lamp.src = './imagens/quebrada.jpg'
}

function lampRepair () {
    if (isLampBroken ()) {
        lamp.src = './imagens/desligada.jpg'
    }
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
repair.addEventListener('click', lampRepair)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)
