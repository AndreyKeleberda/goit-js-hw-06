let counterValue = 0
const val = document.querySelector('#value')
const dBtn = document.querySelector("button[data-action='decrement']")
const iBtn = document.querySelector("button[data-action='increment']")

const decrease = function () {
  counterValue -= 1
  val.textContent = counterValue
}

const increase = function () {
  counterValue += 1
  val.textContent = counterValue
}

dBtn.addEventListener('click', decrease)
iBtn.addEventListener('click', increase)
