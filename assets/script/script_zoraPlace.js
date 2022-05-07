const listaButton = document.querySelectorAll('.btt')
const link = document.querySelector('.link')

for (let i=0; i<listaButton.length; i++){
    const tecla = listaButton[i]
    const instrumento = tecla.classList[1]  //serve para acessar a segunda classe do elemento
    //tecla.addEventListener('click', playAll(`.play_${instrumento}`))
    //tecla.onclick = function (){playAll(`.play_${instrumento}`)} //precisa usar dessa forma, pq com o "addEventListener" não funciona

    tecla.onmousedown = function (){
        playAll(`.play_${instrumento}`)
        //link.setAttribute('class','Link-active')
        link.classList.add('Link-active')
    }
    tecla.onmouseup = function (){
        //link.setAttribute('class', '')
        link.classList.remove('Link-active')
    }

    // Associando as teclas para acionar o som
    const keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG']
    addEventListener('keydown', (evento) => {
        if (evento.repeat){ //evitar que crie um looping ao pressionar uma tecla.
            return
        } 
        if (evento.code == keys[i] ){
            playAll(`.play_${instrumento}`)
            link.setAttribute('class','Link-active')
            tecla.classList.add('btt_active')
        }
    })
    addEventListener('keyup', (evento) => {
        if (evento.code == keys[i]){
            link.setAttribute('class', '')
            tecla.classList.remove('btt_active')
        }
    })
}
for (let i=0; i<listaButton.length; i++){


}

function playAll(evento){
    let audio = document.querySelector(evento)
    audio.currentTime = 0
    audio.play()
}
/*
const songOfTime = ['KeyA', 'KeyS']
const listaKey = []

addEventListener('keydown', evento=>{
    const botao = evento.code
    listaKey.push(botao)
    console.log(listaKey)
    for (let i=0;i<listaKey.length; i++){
        if (listaKey[i] == songOfTime[i]){
            playSong()
        }
    }

    if (listaKey.length == 5){
        listaKey.splice(0,5)
    }
    console.log(songOfTime)
})

function playSong(){
    let song = document.querySelector('.songOfTime')
    song.play()
}
*/


addEventListener('load', ()=>{
    document.querySelector('.play_gasp').play()
})


