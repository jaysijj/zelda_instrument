const listaButton = document.querySelectorAll('.btt')
const link = document.querySelector('.link')
const songOfTime = ['KeyD', 'KeyA', 'KeyS', 'KeyD', 'KeyA', 'KeyS']
const songInvertedTime = ['KeyS', 'KeyA', 'KeyD', 'KeyS', 'KeyA', 'KeyD']
const songOfHealing = ['KeyF', 'KeyD', 'KeyS', 'KeyF', 'KeyD', 'KeyS']
const songOfStorms = ['KeyA', 'KeyS', 'KeyG', 'KeyA', 'KeyS', 'KeyG']
const listaKey = []
const listaKey2 = []
const listaKey3 = []
const listaKey4 = []
let action = true

for (let i = 0; i < listaButton.length; i++) {
  const tecla = listaButton[i]
  const instrumento = tecla.classList[1] //serve para acessar a segunda classe do elemento
  //tecla.addEventListener('click', playAll(`.play_${instrumento}`))
  //tecla.onclick = function (){playAll(`.play_${instrumento}`)} //precisa usar dessa forma, pq com o "addEventListener" não funciona

  tecla.onmousedown = function () {
    if (action === true) {
      playAll(`.play_${instrumento}`)
      //link.setAttribute('class','Link-active')
      link.classList.add('Link-active')
      tecla.classList.add('btt_active')
      PlayMelody(instrumento)
    }
  }
  tecla.onmouseup = function () {
    //link.setAttribute('class', '')
    link.classList.remove('Link-active')
    tecla.classList.remove('btt_active')
  }

  // Associando as teclas para acionar o som
  const keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG']
  addEventListener('keydown', evento => {
    if (evento.repeat) {
      //evitar que crie um looping ao pressionar uma tecla.
      return
    }
    if (evento.code == keys[i] && action === true) {
      playAll(`.play_${instrumento}`)
      link.classList.add('Link-active')
      tecla.classList.add('btt_active')
      PlayMelody(evento.code)
    }
  })
  addEventListener('keyup', evento => {
    if (evento.code == keys[i]) {
      link.classList.remove('Link-active')
      tecla.classList.remove('btt_active')
    }
  })
}

function playAll(evento) {
  let audio = document.querySelector(evento)
  audio.currentTime = 0
  audio.play()
}

function PlayMelody(botao) {
  // const botao = evento.code
  listaKey.push(botao)
  listaKey2.push(botao)
  listaKey3.push(botao)
  listaKey4.push(botao)

  for (let i = 0; listaKey.length > i; i++) {
    if (listaKey[i] !== songOfTime[i]) {
      listaKey.splice(0, i)
    }
  }
  for (let i = 0; listaKey2.length > i; i++) {
    if (listaKey2[i] !== songInvertedTime[i]) {
      listaKey2.splice(0, i)
    }
  }
  for (let i = 0; listaKey3.length > i; i++) {
    if (listaKey3[i] !== songOfHealing[i]) {
      listaKey3.splice(0, i)
    }
  }
  for (let i = 0; listaKey4.length > i; i++) {
    if (listaKey4[i] !== songOfStorms[i]) {
      listaKey4.splice(0, i)
    }
  }

  if (JSON.stringify(listaKey) == JSON.stringify(songOfTime)) {
    let song = document.querySelector('.songOfTime')
    song.play()
    MovimentLink(song)
  } else if (JSON.stringify(listaKey2) == JSON.stringify(songInvertedTime)) {
    let song = document.querySelector('.songInvertedTime')
    song.play()
    MovimentLink(song)
  } else if (JSON.stringify(listaKey3) == JSON.stringify(songOfHealing)) {
    let song = document.querySelector('.songOfHealing')
    song.play()
    MovimentLink(song)
  } else if (JSON.stringify(listaKey4) == JSON.stringify(songOfStorms)) {
    let song = document.querySelector('.songOfStorms')
    song.play()
    MovimentLink(song)
  }
  // console.log(`listaKey 1 ${listaKey}`)
  // console.log(`listaKey 2 ${listaKey2}`)
  // console.log(`listaKey 3 ${listaKey3}`)
  // console.log(`listaKey 4 ${listaKey4}`)

  if (listaKey.length == 6) {
    listaKey.splice(0, 6)
  }
  if (listaKey2.length == 6) {
    listaKey2.splice(0, 6)
  }
  if (listaKey3.length == 6) {
    listaKey3.splice(0, 6)
  }
  if (listaKey4.length == 6) {
    listaKey4.splice(0, 6)
  }
}

function MovimentLink(song) {
  action = false
  link.classList.add('Link-activeLonger')
  function removeLink() {
    action = true
    link.classList.remove('Link-activeLonger')
  }
  setTimeout(removeLink, song.duration * 1000)
}

// addEventListener('keydown', evento => {
//   const botao = evento.code
//   listaKey.push(botao)
//   listaKey2.push(botao)
//   listaKey3.push(botao)
//   listaKey4.push(botao)

//   for (let i = 0; listaKey.length > i; i++) {
//     if (listaKey[i] !== songOfTime[i]) {
//       listaKey.splice(0, i)
//     }
//   }
//   for (let i = 0; listaKey2.length > i; i++) {
//     if (listaKey2[i] !== songInvertedTime[i]) {
//       listaKey2.splice(0, i)
//     }
//   }
//   for (let i = 0; listaKey3.length > i; i++) {
//     if (listaKey3[i] !== songOfHealing[i]) {
//       listaKey3.splice(0, i)
//     }
//   }
//   for (let i = 0; listaKey4.length > i; i++) {
//     if (listaKey4[i] !== songOfStorms[i]) {
//       listaKey4.splice(0, i)
//     }
//   }

//   if (JSON.stringify(listaKey) == JSON.stringify(songOfTime)) {
//     let song = document.querySelector('.songOfTime')
//     song.play()
//   } else if (JSON.stringify(listaKey2) == JSON.stringify(songInvertedTime)) {
//     let song = document.querySelector('.songInvertedTime')
//     song.play()
//   } else if (JSON.stringify(listaKey3) == JSON.stringify(songOfHealing)) {
//     let song = document.querySelector('.songOfHealing')
//     song.play()
//   } else if (JSON.stringify(listaKey4) == JSON.stringify(songOfStorms)) {
//     let song = document.querySelector('.songOfStorms')
//     song.play()
//   }
//   console.log(`listaKey 1 ${listaKey}`)
//   console.log(`listaKey 2 ${listaKey2}`)
//   console.log(`listaKey 3 ${listaKey3}`)
//   console.log(`listaKey 4 ${listaKey4}`)

//   if (listaKey.length == 6) {
//     listaKey.splice(0, 6)
//   }
//   if (listaKey2.length == 6) {
//     listaKey2.splice(0, 6)
//   }
//   if (listaKey3.length == 6) {
//     listaKey3.splice(0, 6)
//   }
//   if (listaKey4.length == 6) {
//     listaKey4.splice(0, 6)
//   }
// })

addEventListener('load', () => {
  document.querySelector('.play_gasp').play()
})

const buttonPart = document.querySelector('.partituraButton')
const parti = document.querySelector('.partitura')
buttonPart.addEventListener('click', () => {
  parti.classList.toggle('partInvisible')
})
