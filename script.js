const form = document.getElementById('form')
const formInput = document.querySelector('.subscribe__input')
const formBtn = document.querySelector('.subscribe__btn')
const subscribeImg = document.querySelector('.subscribe__image')

formInput.addEventListener('input', () => {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.name1.value)) {
    alert("yes")
  }
  alert("You have entered an invalid email address!")

  // regexp.test(formInput.value) ? formBtn.classList.add('btn--active') : formBtn.classList.remove('btn--active')
})


form.addEventListener('submit', e => {
  e.preventDefault()

  subscribeImg.classList.add('subscribe__image--success')
  formBtn.classList.add('btn--success')
  formBtn.value = "You're on the list! 👍"

  formInput.disabled = true
  formBtn.disabled = true
  alert(document.getElementById("this").value)

})