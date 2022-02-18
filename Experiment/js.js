let iconArray = document.querySelectorAll(".iconUnit");
let windowArray = document.querySelectorAll(".window");
let btnArray = document.querySelectorAll(".window .controls .closeBtn");


for (let icon of iconArray) {

    icon.addEventListener('click', (el) => {
        for (let icon of iconArray) {
            icon.classList.remove('selected');
        }
        icon.classList.add('selected');
    })

    icon.addEventListener('dblclick', (el) => {
        let text = el.currentTarget.querySelector('.icon_text');
        console.log(text.textContent)
        for (let window of windowArray) {
            if (window.getAttribute('data-name') == text.textContent) {
                window.style.display = 'block';
            }
        }
    })
}


for (btn of btnArray) {
    btn.onclick = (el) => el.target.parentElement.parentElement.style.display = 'none';
}