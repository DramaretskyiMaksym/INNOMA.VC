document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open");
    document.querySelector("body").classList.toggle("lock");
  })
})


const form = document.querySelector('.form');
const openButton = document.querySelector('#open-form')
const closeButton = document.querySelector('#close-form')

openButton.addEventListener('click', () => {
  form.classList.add('form__showed')
});

closeButton.addEventListener('click', () => {
  form.classList.remove('form__showed')
});
