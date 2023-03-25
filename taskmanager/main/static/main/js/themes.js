function toogle() {
    const toggleTheme = document.querySelector('.themetoggle');
    const item = document.querySelector('.material-symbols-outlined');
    let el = document.documentElement;
    toggleTheme.addEventListener('click', () => {
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme');
            item.innerText = 'light_mode'
            localStorage.removeItem('theme');
        } else {
            el.setAttribute('data-theme', 'white');
            item.innerText = 'dark_mode'
            localStorage.setItem('theme', 'white');
        }
    })
    if (localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'white');
    }
}
toogle();

