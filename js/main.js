

const elLightModeButton = document.querySelector('.site-header-light');
const elDarkModeButton = document.querySelector('.site-header-dark');

elLightModeButton.addEventListener('click', function () {
  document.body.classList.remove('dark-mode');
})

elDarkModeButton.addEventListener('click', function () {
  document.body.classList.add('dark-mode');
})