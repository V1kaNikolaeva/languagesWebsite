const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navMenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('nav__link').forEach(item => item.
    addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
}))