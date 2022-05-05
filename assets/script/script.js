/*const letters = ['buttonA', 'buttonB', 'buttonC', 'buttonD', 'buttonE']
const playAll = ['playA', 'playB', 'playC', 'playD', 'playE']
 

for (let i=0; i<playAll.length;i++){
    const link = document.querySelector(letters[i])
    link.addEventListener('click', playAlli(`.play_${letters[i]}`))
}

function playAlli(evento){
    let noteAudio = document.querySelector(evento)
    noteAudio.play()
} */
const maskDeku0 = document.querySelector('.maskDeku')
const link0 = document.querySelector('.dekuLink')
link0.addEventListener('click', gaspDeku)
maskDeku0.addEventListener('click', gaspDeku)

const link = document.querySelector('.buttonA')
link.addEventListener('click', playA)




const linkSoltar = document.querySelector('.play_buttonA')


const link2 = document.querySelector('.buttonB')
link2.addEventListener('click', playB)

const link3 = document.querySelector('.buttonC')
link3.addEventListener('click', playC)

const link4 = document.querySelector('.buttonD')
link4.addEventListener('click', playD)

const link5 = document.querySelector('.buttonE')
link5.addEventListener('click', playE)


// vai movimentar o personagem ao clicar no botão
const listAll = document.querySelectorAll('.Pipe')
for (let i=0;i<listAll.length;i++){
    const tecla = listAll[i]
    tecla.addEventListener('mousedown', ()=>{
        const k = document.querySelector('main')
        //k.classList.add('dekuLink-active')
        k.children[0].setAttribute('class','dekuLink-active')
    })
    tecla.addEventListener('mouseup', ()=>{
        const k = document.querySelector('main')
        k.children[0].setAttribute('class','')
    })
}





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
    document.querySelector('.play_gaspDeku').play()
}

addEventListener('load', gaspDeku)