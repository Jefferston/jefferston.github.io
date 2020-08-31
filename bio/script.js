let burger = document.querySelector('.burger');
let darkness = document.querySelector('.contentDarkness');
let body = document.querySelector('body');

burger.onclick = () => {
    if (window.getComputedStyle(darkness).display == 'none') {
        darkness.style.display = 'flex';
        burger.style.borderRadius = '100%';
        burger.textContent = 'X';
        burger.style.backgroundImage = 'none';
        body.style.overflowY = 'hidden';
    } else {
        darkness.style.display = 'none';
        burger.style.borderRadius = '0';
        burger.textContent = '';
        burger.style.backgroundImage = "url('./menu.png')";
        body.style.overflowY = 'auto';
    }
}
