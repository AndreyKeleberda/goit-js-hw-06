const input = document.querySelector('#validation-input')
input.addEventListener('blur', (e) => {
  if (input.getAttribute('data-length') == e.currentTarget.value.length) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
    input.classList.remove('valid')
  }
})
