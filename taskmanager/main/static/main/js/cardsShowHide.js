'use strict'
const word = document.querySelectorAll('.word');
const trs = document.querySelectorAll('.description');
const hideWordBtn = document.querySelector('.wordBtnFirst');
const hideTrsBtn = document.querySelector('.descriptionBtnSecond');

hideWordBtn.onclick = hideWord;
hideTrsBtn.onclick = hideTrs;

function hideWord() {
    word.forEach(x => x.classList.toggle('hidden'))
    if(word.classList = 'hidden') {
        hideWordBtn.innerText = 'Показать слова'
    } else if(word.classList = 'word') {
        hideWordBtn.innerText = 'Скрыть слова'
    }
}

function hideTrs() {
    console.log('lol')
    trs.forEach(x => x.classList.toggle('hidden'))
}
