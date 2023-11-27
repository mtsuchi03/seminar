const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('fix');
});