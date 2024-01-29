const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});
