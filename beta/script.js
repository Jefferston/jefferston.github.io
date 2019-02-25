const halfs = document.querySelectorAll('.halfs');
const words = document.querySelectorAll('.words');
let ms = 330;


for (let half of halfs) {
    
    half.addEventListener('mouseover', (ev) => {
        if ( !(half.classList.contains('rightFull')) && !(half.classList.contains('firstFull')) ) {
            half.classList.add('extended');
        }

        if ( !(half.classList.contains('rightFull')) && !(half.classList.contains('firstFull')) ) {
            setTimeout(() => {
                half.style.width = '70%';
            }, ms)
        }
        
        if (half.classList.contains('shrink')) {
            half.classList.remove('shrink');
        }
    })


    half.addEventListener('mouseout', (ev) => {
        if ( (half.classList.contains('extended')) && !(half.classList.contains('rightFull')) && !(half.classList.contains('firstFull')) ) {
            half.classList.remove('extended');
            half.classList.add('shrink');

            setTimeout(() => {
                half.style.width = '50%';
            }, ms);
        }
    })
    

    for (let word of words) {
        word.addEventListener('mouseover', (ev) => {

            word.previousElementSibling.classList.add('extended');
    
            setTimeout(() => {
                word.previousElementSibling.style.width = '70%';
            }, ms)
    
            if (word.previousElementSibling.classList.contains('shrink')) {
                word.previousElementSibling.classList.remove('shrink');
            }
        })
    
    
        word.addEventListener('mouseout', (ev) => {
            if (word.previousElementSibling.classList.contains('extended')) {
                word.previousElementSibling.classList.remove('extended');
                word.previousElementSibling.classList.add('shrink');
    
                setTimeout(() => {
                    word.previousElementSibling.style.width = '50%';
                }, ms);

            }
        })
    }

}
////////////////////////////////////////////////////////
// DON'T TOUCH THIS PART ANYMORE
////////////////////////////////////////////////////////
const rightPart = document.querySelector('.second');
const portfolio = document.querySelector('.portfolio');
const cv = document.querySelector('.cv');

const firstPart = document.querySelector('.first');
const projects = document.querySelector('.projects');
const projPage = document.querySelector('.projPage');

let closeProj = document.querySelector('.closeProj');

rightPart.addEventListener('click', () => {

    if ( rightPart.style.width == '70%' ) {
        rightPart.style.width = '600%';
        portfolio.style.display = 'none';
        rightPart.classList.add('rightFull');
        rightPart.classList.remove('extended');
        cv.style.opacity = '1';
    } else {
        rightPart.style.width = '50%';
        portfolio.style.display = 'block';
        rightPart.classList.remove('rightFull');
        rightPart.classList.remove('extended');
        cv.style.opacity = '0';
    }
})


firstPart.addEventListener('click', () => {

    if ( firstPart.style.width == '70%' ) {
        firstPart.style.width = '1800%';
        firstPart.style.cursor = 'initial';
        projects.style.display = 'none';
        portfolio.style.display = 'none';
        firstPart.classList.add('firstFull');
        firstPart.classList.remove('extended');
        projPage.style.opacity = '1';
        projPage.style.visibility = 'visible';
        closeProj.style.opacity = '1';
    } 
})

closeProj.addEventListener('click', () => {
    firstPart.style.width = '50%';
    firstPart.style.cursor = 'pointer';
    projects.style.display = 'block';
    portfolio.style.display = 'block';
    firstPart.classList.remove('firstFull');
    firstPart.classList.remove('extended');
    projPage.style.opacity = '0';
    projPage.style.visibility = 'hidden';
    closeProj.style.opacity = '0';
})