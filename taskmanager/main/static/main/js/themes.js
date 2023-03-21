const btn = document.querySelector('.theme__button')
const theme = document.querySelector('.theme')

theme.setAttribute('data-theme', 'dark')

btn.addEventListener('click', () => {
  if (theme.getAttribute('data-theme') === 'light') {
    theme.setAttribute('data-theme', 'dark')
  } else {
    theme.setAttribute('data-theme', 'light')
  }
})