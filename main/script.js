let burger = document.querySelector('.leftSideBurger');
let ava = document.querySelector('.leftSide');
let text = document.querySelector('.rightSide');
let darkness = document.querySelector('.contentDarkness');
let body = document.querySelector('body');

burger.onclick = () => {
    if (window.getComputedStyle(darkness).display == 'none') {
        darkness.style.display = 'flex';
        ava.style.backgroundColor = '#333';
        ava.style.backgroundImage = 'none';
        text.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';
        burger.textContent = 'X';
        burger.style.backgroundImage = 'none';
    } else {
        darkness.style.display = 'none';
        ava.style.backgroundImage = "url('./ein.jpg')";
        text.style.overflowY = 'auto';
        body.style.overflowY = 'auto';
        burger.textContent = '';
        burger.style.backgroundImage = "url('./menu.png')";
    }
}
