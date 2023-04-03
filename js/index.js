
import sounds from "./sounds.js"

const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')
const buttonVolumeUp = document.querySelector('#volume-up')
const buttonVolumeDown = document.querySelector('#volume-low')

const boxSoundForest = document.querySelector('#card-forest')
const boxSoundRain = document.querySelector('#card-rain')
const boxSoundMarket = document.querySelector('#card-market')
const boxSoundFire = document.querySelector('#card-fire')

const sunIcon = document.querySelector('.sun_icon')
const moonIcon = document.querySelector('.moon_icon')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

let resetTimer

const sound = sounds()

function addDarkMode() {
  document.body.classList.add('dark-mode')
}

function removeDarkMode() {
  document.body.classList.remove('dark-mode')
}

function countdown() {
  resetTimer = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    countdown()
  }, 10)
}

function checkColorIsBlue(item) {
  if (item.style.backgroundColor == "rgb(2, 121, 157)" /*blue*/) {
    item.style.backgroundColor = 'rgb(225, 225, 230' /*gray*/
  } else {
    item.style.backgroundColor = "rgb(2, 121, 157)"
  }
  return item.style.backgroundColor
}

buttonPlay.addEventListener('click', function () {
  clearInterval(resetTimer)
  countdown()
})

buttonStop.addEventListener('click', function () {
  clearInterval(resetTimer)
  sound.stopAllSounds()
  minutesDisplay.textContent = 15
  secondsDisplay.textContent = "00"
})

buttonVolumeUp.addEventListener('click', function () {
  sound.volumeUp()
})

buttonVolumeDown.addEventListener('click', function () {
  sound.volumeDown()
})

boxSoundForest.addEventListener('click', function () {
  let result = checkColorIsBlue(boxSoundForest)
  if (result == "rgb(225, 225, 230)") {
    sound.stopAllSounds()
  } else {
    sound.stopAllSounds()
    sound.forestSound.play()
  }
})

boxSoundRain.addEventListener('click', function () {
  let result = checkColorIsBlue(boxSoundRain)
  if (result == "rgb(225, 225, 230)") {
    sound.stopAllSounds()
  } else {
    sound.stopAllSounds()
    sound.rainSound.play()
  }
})

boxSoundMarket.addEventListener('click', function () {
  let result = checkColorIsBlue(boxSoundMarket)
  if (result == "rgb(225, 225, 230)") {
    sound.stopAllSounds()
  } else {
    sound.stopAllSounds()
    sound.coffeeSound.play()
  }
})

boxSoundFire.addEventListener('click', function () {
  let result = checkColorIsBlue(boxSoundFire)
  if (result == "rgb(225, 225, 230)") {
    sound.stopAllSounds()
  } else {
    sound.stopAllSounds()
    sound.firePlaceSound.play()
  }
})

sunIcon.addEventListener('click', function () {
  addDarkMode()
  sunIcon.classList.add('hide')
  moonIcon.classList.remove('hide')
})

moonIcon.addEventListener('click', function () {
  removeDarkMode()
  moonIcon.classList.add('hide')
  sunIcon.classList.remove('hide')
})


