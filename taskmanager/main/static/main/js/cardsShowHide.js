'use strict'
const word = document.querySelectorAll('.word');
const trs = document.querySelectorAll('.description');
const hideWordBtn = document.querySelector('.wordBtnFirst');
const hideTrsBtn = document.querySelector('.descriptionBtnSecond');

hideWordBtn.onclick = hideWord;
hideTrsBtn.onclick = hideTrs;

function hideWord() {
    word.forEach(x => x.classList.toggle('hidden'))
    if(hideWordBtn.innerText == 'Показать слова') {
        hideWordBtn.innerText = 'Скрыть слова';
    } else if(hideWordBtn.innerText == 'Скрыть слова') {
        hideWordBtn.innerText = 'Показать слова';
    }
}

function hideTrs() {
    trs.forEach(x => x.classList.toggle('hidden'))
    if(hideTrsBtn.innerText == 'Показать перевод') {
        hideTrsBtn.innerText = 'Скрыть перевод';
    } else if(hideTrsBtn.innerText == 'Скрыть перевод') {
        hideTrsBtn.innerText = 'Показать перевод';
    }
}
