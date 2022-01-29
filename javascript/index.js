const answers = document.querySelectorAll('.answer')
const add1 = document.getElementById('add1')
const add2 = document.getElementById('add2')
const add3 = document.getElementById('add3')
const add4 = document.getElementById('add4')
const hambtn = document.getElementById('hambtn')
const hamList = document.querySelector(".ham-list")
add1.addEventListener('click', (e) => {
    answers[0].classList.toggle("show")
})
add2.addEventListener('click', (e) => {
    answers[1].classList.toggle("show")
})
add3.addEventListener('click', (e) => {
    answers[2].classList.toggle("show")
})
add4.addEventListener('click', (e) => {
    answers[3].classList.toggle("show")
})
hambtn.addEventListener('click', () => {
    hamList.classList.toggle('show')
})
