const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0];
const filter = document.getElementById('filter');
let isTouchMoveActive = false;

function disableScroll(event) {
    event.preventDefault();
}

function toggleTouchMove() {
    if (isTouchMoveActive) {
        body.removeEventListener('touchmove', disableScroll, { passive: false });
        isTouchMoveActive = false;
    } else {
        body.addEventListener('touchmove', disableScroll, { passive: false });
        isTouchMoveActive = true;
    }
}

function menuAction() {
    toggleTouchMove();
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    filter.classList.toggle('active');
}

btn.addEventListener('click', menuAction);
filter.addEventListener('click', menuAction);
//menu btn action

for (i = 0; i < 2; i++) {
    btnParts = document.createElement('span');
    btn.appendChild(btnParts);
}
//create menu btn

const srv = document.getElementById('srv');
const game = document.getElementById('game');
const srvlst = document.getElementById('srvlst');
const gamelst = document.getElementById('gamelst');

srv.addEventListener('click', () => {
    srv.classList.toggle('active');
    srvlst.classList.toggle('active');
})
game.addEventListener('click', () => {
    game.classList.toggle('active');
    gamelst.classList.toggle('active');
})
//list action

h2 = document.getElementsByTagName('h2');
agenda = document.getElementById('agenda');
for (i = 0; i < h2.length; i++) {
    text = h2[i].textContent.replace(/\n\s+/g, '');
    text = text.replace(/\d\.\s/, '');
    h2id = h2[i].parentNode.parentNode.getAttribute('id');
    agenda.innerHTML += '<li><a href="#' + h2id + '">' + text + '</a></li>'
}
//set agenda