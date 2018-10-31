// get clock hands as elements
const secondHand = document.querySelector('#second-hand')
const minuteHand = document.querySelector('#minute-hand')
const hourHand   = document.querySelector('#hour-hand'  )

// Move the hands
const setTime = () => {
  const now = new Date()

  const secondDegrees = (now.getSeconds() * 360 / 60)
  const minuteDegrees = (now.getMinutes() * 360 / 60) + (secondDegrees / 60)
  const hourDegrees   = (now.getHours()   * 360 / 12) + (minuteDegrees / 12)

  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  hourHand.style.transform   = `rotate(${hourDegrees  }deg)`
}

setTime() // avoid flash of unstyled content
setInterval(setTime, 1000) // animate
