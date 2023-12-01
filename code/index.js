const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('fix');
});
//menu btn action

h2 = document.getElementsByTagName('h2');
agenda = document.getElementById('agenda');
for (i = 0; i < h2.length; i++) {
    text = h2[i].textContent.replace(/\n\s+/g, '');
    text = text.replace(/\d\.\s/, '');
    h2id = h2[i].parentNode.parentNode.getAttribute('id');
    agenda.innerHTML += '<li><a href="#' + h2id + '">' + text + '</a></li>'
}
//set agenda