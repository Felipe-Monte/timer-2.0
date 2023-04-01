
export default function () {

  const forestSound = new Audio("./sounds/Forest.wav")
  const rainSound = new Audio("./sounds/Rain.wav")
  const coffeeSound = new Audio("./sounds/Coffee.wav")
  const firePlaceSound = new Audio("./sounds/Fireplace.wav")

  function stopAllSounds() {
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
    firePlaceSound.pause()
  }

  return {
    forestSound,
    rainSound,
    coffeeSound,
    firePlaceSound,
    stopAllSounds
  }
}