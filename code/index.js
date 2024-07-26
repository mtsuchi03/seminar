const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0];
const filter = document.getElementById('filter');
let isTouchMoveActive = false;
let isPhones = false;

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
//スマートフォンでのスクロール禁止

function isSmartphone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/) || window.matchMedia('max-device-width:767px)').matches) {
        isPhones = true;
    } else {
        isPhones = false;
    }
}
//クライアント判別

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

let deviceWidth;

function setPdLeft() {
    isSmartphone();
    deviceWidth = window.screen.width;
    let pdLeft = Math.round((0.2 - 75 / deviceWidth) * 100000) / 1000 + 'vw';
    if (isPhones) {
        document.getElementsByClassName('logo-area')[1].style.paddingLeft = pdLeft;
    } else {
        document.getElementsByClassName('logo-area')[1].style.paddingLeft = 0;
    }
}

document.addEventListener('DOMContentLoaded', setPdLeft);
window.addEventListener('resize', setPdLeft);

const h2 = document.getElementsByTagName('h2');
const agenda = document.getElementById('agenda');
for (i = 0; i < h2.length; i++) {
    text = h2[i].textContent.replace(/\n\s+/g, '');
    text = text.replace(/\d\.\s/, '');
    h2id = h2[i].parentNode.parentNode.getAttribute('id');
    agenda.innerHTML += '<li><a href="#' + h2id + '">' + text + '</a></li>'
}
//set agenda

let pre = -1;
let supFlag = false;

const supplements = document.getElementsByClassName('supplement');
let supIcon;
for (i = 0; i < supplements.length; i++) {
    supIcon = document.createElement('span');
    supIcon.classList.add('supIcon');
    supIcon.textContent = '?';
    supplements[i].parentNode.insertBefore(supIcon, supplements[i]);
    supIcon.appendChild(supplements[i]);
}
//supplementの改良