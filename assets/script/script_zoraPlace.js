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
    let botao = document.querySelector(evento)
    botao.currentTime = 0
    botao.play()
}







function lua(){
    console.log('olá')
}



addEventListener('load', ()=>{
    document.querySelector('.play_gasp').play()
})


