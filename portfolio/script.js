let descs = document.querySelectorAll('.description');
let closeButs = document.querySelectorAll('.descBlock button');
let wrappers = document.querySelectorAll('.projectPage .container .wrapper');

for (let desc of descs) {
    for (let wrap of wrappers) {
        desc.addEventListener('click', (e) => {
            e.preventDefault();
            
            wrap.style.perspective = 'none';
            desc.nextElementSibling.style.visibility = 'visible';
        });
    }
}

for (let closeBut of closeButs) {
    for (let wrap of wrappers) {
        closeBut.addEventListener('click', (e) => {

            wrap.style.perspective = '500px';
            closeBut.parentElement.style.visibility = 'hidden';
        });
    }
}

document.querySelector('.projectPage h1').textContent = '< My Projects />'