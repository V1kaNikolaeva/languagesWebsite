'use strict'

document.querySelector('.search').oninput = function() {
    const card = document.querySelectorAll('.card');
    let val = this.value.trim();
    if (val != '') {
        card.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hidden');
            } else {
                elem.classList.remove('hidden');
            }
        });
    } else {
        card.forEach(function(elem) {
            elem.classList.remove('hidden')
        });
    }
}