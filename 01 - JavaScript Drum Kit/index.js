const animate = function (elem) {
  const keyframes = {
    transform: ['scale(1.0)', 'scale(1.125)'],
    boxShadow: ['none', '0 0 1rem #ffc600'],
  }
  const options = { duration: 100, easing: 'ease' }
  elem.animate(keyframes, options)
}

const playSound = function (event) {
  const key = document.querySelector(`.key[data-key="${event.code}"]`)

  if (!key) return

  const audio = key.querySelector('audio')
  audio.currentTime = 0
  audio.play()

  animate(key)
}

window.addEventListener('keydown', playSound)
