let burger = document.querySelector('.leftSideBurger');
let ava = document.querySelector('.leftSide');
let text = document.querySelector('.rightSide');
let darkness = document.querySelector('.contentDarkness');

burger.onclick = () => {
    if (window.getComputedStyle(darkness).display == 'none') {
        darkness.style.display = 'flex';
        ava.style.backgroundColor = '#333';
        ava.style.backgroundImage = 'none';
        text.style.overflowY = 'hidden';
        burger.style.borderRadius = '100%';
        burger.textContent = 'X';
        burger.style.backgroundImage = 'none';
    } else {
        darkness.style.display = 'none';
        ava.style.backgroundImage = "url('./me.jpg')";
        text.style.overflowY = 'auto';
        burger.style.borderRadius = '0';
        burger.textContent = '';
        burger.style.backgroundImage = "url('./menu.png')";
    }
}
