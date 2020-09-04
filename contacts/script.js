let burger = document.querySelector('.burger');
let darkness = document.querySelector('.contentDarkness');
let body = document.querySelector('body');
let subcard = document.querySelector('.subcard');

burger.onclick = () => {
    if (window.getComputedStyle(darkness).display == 'none') {
        darkness.style.display = 'flex';
        burger.style.borderRadius = '100%';
        burger.textContent = 'X';
        burger.style.backgroundImage = 'none';
        body.style.overflowY = 'hidden';
        subcard.style.backgroundColor = '#000';
    } else {
        darkness.style.display = 'none';
        burger.style.borderRadius = '0';
        burger.textContent = '';
        burger.style.backgroundImage = "url('./menu.png')";
        body.style.overflowY = 'auto';
        subcard.style.backgroundColor = '#808F8C';
    }
}
