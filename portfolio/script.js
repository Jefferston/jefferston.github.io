document.querySelector('.but a').onclick = ev => ev.preventDefault();

let leftBlock = document.querySelector('.leftBlock');
let rightBlock = document.querySelector('.rightBlock');
let openLeftBlock = document.querySelector('.openLeft');
let openRightBlock = document.querySelector('.openRight');

openLeftBlock.addEventListener('click', ev => {
    leftBlock.classList.toggle('clickedLeft');
});

openRightBlock.addEventListener('click', ev => {
    rightBlock.classList.toggle('clickedRight');
})