
export default function () {

  const forestSound = new Audio("./sounds/Forest.wav")
  const rainSound = new Audio("./sounds/Rain.wav")
  const coffeeSound = new Audio("./sounds/Coffee.wav")
  const firePlaceSound = new Audio("./sounds/Fireplace.wav")

  forestSound.loop = true
  rainSound.loop = true
  coffeeSound.loop = true
  firePlaceSound.loop = true

  function stopAllSounds() {
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
    firePlaceSound.pause()
  }

  function volumeUp() {
    forestSound.volume += 0.1
    rainSound.volume += 0.1
    coffeeSound.volume += 0.1
    firePlaceSound.volume += 0.1
  }

  function volumeDown() {
    forestSound.volume -= 0.1
    rainSound.volume -= 0.1
    coffeeSound.volume -= 0.1
    firePlaceSound.volume -= 0.1
  }

  return {
    forestSound,
    rainSound,
    coffeeSound,
    firePlaceSound,
    stopAllSounds,
    volumeUp,
    volumeDown,
  }
}