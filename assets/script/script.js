/*const letters = ['A', 'B', 'C', 'D', 'E']
const playAll = ['playA', 'playB', 'playC', 'playD', 'playE']
 

for (let i=0; i<playAll.length;i++){
    const link = document.querySelector(`.button${letters[i]}`)
    link.addEventListener('click', playAll[i])
}*/

const maskDeku0 = document.querySelector('.maskDeku')
const link0 = document.querySelector('.dekuLink')
link0.addEventListener('click', gaspDeku)
maskDeku0.addEventListener('click', gaspDeku)

const link = document.querySelector('.buttonA')
link.addEventListener('click', playA)

link.addEventListener('mousedown', ()=>{
    const k = document.querySelector('main')
    //k.classList.add('dekuLink-active')
    k.children[0].setAttribute('class','dekuLink-active')
})
link.addEventListener('mouseup', ()=>{
    const k = document.querySelector('main')
    k.children[0].setAttribute('class','')
})

const linkSoltar = document.querySelector('.play_buttonA')


const link2 = document.querySelector('.buttonB')
link2.addEventListener('click', playB)

const link3 = document.querySelector('.buttonC')
link3.addEventListener('click', playC)

const link4 = document.querySelector('.buttonD')
link4.addEventListener('click', playD)

const link5 = document.querySelector('.buttonE')
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
    let noteAudio = document.querySelector('.play_buttonA')
    noteAudio.currentTime = 0 //Retira o delay de aperto consecutivo das teclas
    noteAudio.play()
}
function playB(){
    let noteAudio = document.querySelector('.play_buttonB')
    noteAudio.currentTime = 0
    noteAudio.play()
}
function playC(){
    let noteAudio = document.querySelector('.play_buttonC')
    noteAudio.currentTime = 0
    noteAudio.play()
}
function playD(){
    let noteAudio = document.querySelector('.play_buttonD')
    noteAudio.currentTime = 0
    noteAudio.play()
}
function playE(){
    let noteAudio = document.querySelector('.play_buttonE')
    noteAudio.currentTime = 0
    noteAudio.play()
}
function gaspDeku(){
    document.querySelector('.gaspDeku').play()
}

