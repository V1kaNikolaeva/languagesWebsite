const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navMenu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

function removeActive() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}

document.querySelectorAll('nav__link').forEach(item => item.
    addEventListener('click', () => {
        removeActive()
}))

document.addEventListener('pointerdown', (e) => {
    const withinBoundaries = e.composedPath().includes(hamburger) || e.composedPath().includes(navMenu);
	if (!withinBoundaries) {
        removeActive()
	}
})

document.addEventListener('mousedown', (e) => {
    const withinBoundaries = e.composedPath().includes(hamburger) || e.composedPath().includes(navMenu);
	if (!withinBoundaries) {
        removeActive()
	}
})

document.addEventListener('scroll', (e) => {
    const withinBoundaries = e.composedPath().includes(hamburger) || e.composedPath().includes(navMenu);
	if (!withinBoundaries) {
        removeActive()
	}
})

//Главная будет разделом учиться, где будут представлены А1 и ХСК1, со словами и пояснениями как ими пользоваться
//Раздел аккаунт отвечает за отоброжение слов
//Тесты тоже будут по разделам, так же можно создать один общий test.js и два массива, просто подключая нужный к html шаблону