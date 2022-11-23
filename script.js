const menu = document.querySelector('.menu-toggle')
const navUl = document.querySelector('nav ul')
const navSpan = document.querySelectorAll('nav span')
const navbar = document.querySelector('nav')
const questions = document.querySelectorAll('.questions')
const qExplanations = document.querySelectorAll('.questions .explanation')
const arrow = document.querySelectorAll(".faq .questions img")

menu.addEventListener('click', function(){
    navUl.classList.toggle('slide')
    navSpan[0].classList.toggle('span1')
    navSpan[1].classList.toggle('hide')
    navSpan[2].classList.toggle('span3')
})

for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', function(){
        for(let j = 0; j < questions.length; j++){
            if (j != i ){
                qExplanations[j].classList.remove('active')
                arrow[j].classList.remove('rotated')
            }
        }
        qExplanations[i].classList.toggle('active')
        arrow[i].classList.toggle('rotated')
    })
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50){
        navbar.classList.add('active_nav')
    } else {
        navbar.classList.remove('active_nav')
    }
})