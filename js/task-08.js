const form = document.querySelector('.login-form')

function onSubmitForm(event) {
  event.preventDefault()

  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === '' || password.value === '') {
    return alert("Oops, we can't log in without email or password")
  }
  const dataUser = {
    email: email.value,
    passwor: password.value,
  }
  console.log(dataUser)
  event.currentTarget.reset()
}

form.addEventListener('submit', onSubmitForm)
