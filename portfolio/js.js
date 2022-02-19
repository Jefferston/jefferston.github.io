let iconArray = document.querySelectorAll(".iconUnit");
let windowArray = document.querySelectorAll(".window");
let btnArray = document.querySelectorAll(".window .controls .closeBtn");
let postArray = document.querySelectorAll(".postContainer .post");


for (let icon of iconArray) {

    icon.addEventListener('click', (el) => {
        for (let icon of iconArray) {
            icon.classList.remove('selected');
        }
        icon.classList.add('selected');
    })

    icon.addEventListener('dblclick', (el) => {
        let text = el.currentTarget.querySelector('.icon_text');
        for (let window of windowArray) {
            if (window.getAttribute('data-name') == text.textContent) {
                window.style.display = 'block';
            }
        }
        for (let icon of iconArray) {
            icon.classList.remove('selected');
        }
    })
}


for (let btn of btnArray) {
    btn.onclick = (el) => el.target.parentElement.parentElement.style.display = 'none';
}

for (let post of postArray) {
    post.addEventListener('click', (el) => {

        let url = getComputedStyle(el.target).getPropertyValue('background-image')
        document.querySelector('.postBig').style.display = 'block';
        document.querySelector('.postBig').style.backgroundImage = url
        // console.log(getComputedStyle(el.target).getPropertyValue('background-image'))

        // let bigPic = document.createElement('div');
        // document.querySelector('.desk').appendChild(bigPic);
        // bigPic.classList.add('postBig');
        // bigPic.style.backgroundImage = "url(./img/insta/china.jpg)"
        // console.log(bigPic)
    })
}

document.querySelector('.postBig').onclick = (el) => el.target.style.display = 'none';