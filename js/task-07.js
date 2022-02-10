const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
input.addEventListener('input', (level) => {
  text.style.fontSize = `${level.target.value}px`
})
