const panels = document.querySelectorAll('.panel')

const toggleOpen = function () {
  this.classList.toggle('open')
}

const toggleOpenActive = function (event) {
  console.log(event.propertyName)
  if (event.propertyName.startsWith('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive))
