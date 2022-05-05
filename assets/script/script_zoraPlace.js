const listaButton = document.querySelectorAll('.Pipe')
for (let i=0; i<listaButton.length; i++){
    const tecla = listaButton[i]
    const instrumento = tecla.classList[1]  //serve para acessar a segunda classe do elemento
    //tecla.addEventListener('click', playAll(`.play_${instrumento}`))
    tecla.onclick = function (){playAll(`.play_${instrumento}`)} //precisa usar dessa forma, pq com o "addevent listener" não funciona

    // Associando as teclas para acionar o som
    const keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG']
    addEventListener('keydown', (evento) =>{
        if (evento.code == keys[i]){
            playAll(`.play_${instrumento}`)
        }
    })
}






function lua(){
    console.log('olá')
}

const playButton = ['.play_buttonA', '.play_buttonB', '.play_buttonC', '.play_buttonD', '.play_buttonE']
function playAll(evento){
    let botao = document.querySelector(evento)
    botao.currentTime = 0
    botao.play()
}





/*
const playButton = ['play_buttonA', 'play_buttonB', 'play_buttonC', 'play_buttonD', 'play_buttonE']
function playAll(){
    for (let i=0; i<letters.length; i++){
        let botao = document.querySelector(playButton[i])
        botao.play()
    }

}*/