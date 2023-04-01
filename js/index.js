
import sounds from "./sounds.js"

const buttonPlay = document.querySelector('#play')
const buttonStop = document.querySelector('#stop')

let minutesDisplay = document.querySelector('#minutes')
let secondsDisplay = document.querySelector('#seconds')

let resetTimer

const sound = sounds()

function countdown() {
  resetTimer = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = minutes - 1
    }

    secondsDisplay.textContent = seconds - 1
    countdown()
  }, 100)
}

buttonPlay.addEventListener('click', function () {
  clearInterval(resetTimer)
  countdown()
})

buttonStop.addEventListener('click', function () {
  clearInterval(resetTimer)
  minutesDisplay.textContent = 15
  secondsDisplay.textContent = "00"
})