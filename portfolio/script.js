let descs = document.querySelectorAll('.description');
let closeButs = document.querySelectorAll('.descBlock button');

for (let desc of descs) {
    desc.addEventListener('click', (e) => {
        e.preventDefault();
    
        desc.nextElementSibling.style.visibility = 'visible';
    });
}

for (let closeBut of closeButs) {
    closeBut.addEventListener('click', (e) => {

        closeBut.parentElement.style.visibility = 'hidden';
    });
}
