const list = document.querySelectorAll('.Pipe')
for (let i=0; i<list.length; i++){
    const tecla = list[i]
    const bla = tecla.classList[1]
    tecla.onclick = function (){
        const audio = document.querySelectorAll('.audio')
        audio[i].currentTime = 0
        audio[i].play()
        console.log('olá')
    }
}


