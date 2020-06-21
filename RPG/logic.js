let exp = 0;
let levelArray = [];
let level = 1;
let Attributes = {
    'Intelligence': 7.2,
    'Charm': 5,
    'Will': 8,
    'Sense of beauty': 7,
    'Luck': 4
}

getExperience = () => {
    let IntelData = document.querySelectorAll('.body .knowledge .list .list_item p span');
    for (let i = 0; i < IntelData.length; i++) {

        let sum = parseInt(IntelData[i].textContent, 10);
        exp += sum * Attributes["Intelligence"];

        let bars = document.querySelectorAll('.body .knowledge .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let LangData = document.querySelectorAll('.body .languages .list .list_item p span');
    for (let i = 0; i < LangData.length; i++) {

        let sum = parseInt(LangData[i].textContent, 10);
        exp += sum;

        let bars = document.querySelectorAll('.body .languages .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let ArtData = document.querySelectorAll('.body .art .list .list_item p span');
    for (let i = 0; i < ArtData.length; i++) {

        let sum = parseInt(ArtData[i].textContent, 10);
        exp += sum * Attributes["Sense of beauty"];
    }

    let OtherData = document.querySelectorAll('.body .other .list .list_item p span');
    for (let i = 0; i < OtherData.length; i++) {

        let sum = parseInt(OtherData[i].textContent, 10);
        exp += sum;

        let bars = document.querySelectorAll('.body .other .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let TravelData = document.querySelectorAll('.body .travel .list .list_item p');
    exp += TravelData.length * 200;

    let AgeValue = document.querySelector('.header .age h1').textContent;
    exp += (parseInt(AgeValue, 10) - 12) * 1000;
}

getLevel = () => {
    for (let n = 1; n <= 15; n++) {

        let number = n * 1000;
        levelArray.push(number);    
    }

    for (let i = 1; i < levelArray.length; i++) {
        levelArray[i] = levelArray[i] + levelArray[i - 1];

        if (levelArray[i] < exp) level = i + 2;
    }

    let levelBar = document.querySelector('.levelBar .bar_progress');
    levelBar.style.width = `${100 - ((levelArray[level - 1] - exp) * 100 / (levelArray[level - 1] - levelArray[level - 2]))}%`;

    // console.log(levelArray);
    // console.log(exp);
    console.log(`Level ${level}`);
    console.log(`You need ${levelArray[level - 1] - exp} experience to reach level ${level + 1}.`);
}

getExperience();
getLevel();


let head = document.querySelector('.header .level h1');
let subHead = document.querySelector('.header .level h3');
head.textContent = `Level ${level}`;
subHead.textContent = `You need ${levelArray[level - 1] - exp} experience to reach level ${level + 1}.`;