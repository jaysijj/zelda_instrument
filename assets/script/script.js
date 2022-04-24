/*
const link = document.querySelector("main")
link.addEventListener('click',playNote)
function playNote(){
    const noteA = document.querySelector('#buttonA')
    noteA.play()
}*/



const link = document.querySelector('.Pipes_A')
link.addEventListener('click', () => {
    document.querySelector('#buttonA').play()
})

const link2 = document.querySelector('.Pipes_B')
link2.addEventListener('click', () => {
    document.querySelector('#buttonB').play()
})

const link3 = document.querySelector('.Pipes_C')
link3.addEventListener('click', () => {
    document.querySelector('#buttonC').play()
})

const link4 = document.querySelector('.Pipes_D')
link4.addEventListener('click', () => {
    document.querySelector('#buttonD').play()
})

const link5 = document.querySelector('.Pipes_E')
link5.addEventListener('click', () => {
    document.querySelector('#buttonE').play()
})
const clicou = document.querySelector('.Pipe')
clicou.addEventListener('click', )