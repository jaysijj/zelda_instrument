/*const letters = ['A', 'B', 'C', 'D', 'E']
const playAll = ['playA', 'playB', 'playC', 'playD', 'playE']
 

for (let i=0; i<playAll.length;i++){
    const link = document.querySelector(`.Pipes_${letters[i]}`)
    link.addEventListener('click', playAll[i])
}*/

const maskDeku0 = document.querySelector('.maskDeku')
const link0 = document.querySelector('.dekuLink')
link0.addEventListener('click', gaspDeku)
maskDeku0.addEventListener('click', gaspDeku)

const link = document.querySelector('.Pipes_A')
link.addEventListener('click', playA)

const link2 = document.querySelector('.Pipes_B')
link2.addEventListener('click', playB)

const link3 = document.querySelector('.Pipes_C')
link3.addEventListener('click', playC)

const link4 = document.querySelector('.Pipes_D')
link4.addEventListener('click', playD)

const link5 = document.querySelector('.Pipes_E')
link5.addEventListener('click', playE)

window.addEventListener('keydown', (evento)=>{
    console.log(evento)
    if (evento.code == 'KeyA'){
        playA()
    }
    if (evento.code == 'KeyS'){
        playB()
    }
    if (evento.code == 'KeyD'){
        playC()
    }
    if (evento.code == 'KeyF'){
        playD()
    }
    if (evento.code == 'KeyG'){
        playE()
    }
})

function playA(){
    document.querySelector('#buttonA').play()
}
function playB(){
    document.querySelector('#buttonB').play()
}
function playC(){
    document.querySelector('#buttonC').play()
}
function playD(){
    document.querySelector('#buttonD').play()
}
function playE(){
    document.querySelector('#buttonE').play()
}
function gaspDeku(){
    document.querySelector('#gaspDeku').play()
}

/*
const clicou = document.querySelector('.Pipe')
clicou.addEventListener('click', )*/