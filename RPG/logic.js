let exp = 0;
let levelArray = [];
let level = 1;
let Attributes = {
    'Intelligence': 7,
    'Charisma': 6,
    'Will': 7,
    'Sense of beauty': 8,
    'Luck': 4
};

getAttributes = () => {
    let govnoCode = ['Intelligence', 'Charisma', 'Will', 'Sense of beauty', 'Luck'];
    let listChars = document.querySelectorAll('.header .chars ul .char_block li');
    let listCharSpans = document.querySelectorAll('.header .chars ul .char_block span');

    listCharSpans.forEach(el => el.textContent = `${Attributes[govnoCode[el.previousElementSibling.textContent]]}`)
    listChars.forEach(el => el.textContent = `${govnoCode[el.textContent]}: `);
}

getAuthors = () => {
    let authors = document.querySelectorAll('.authors p');

    for (let author of authors) {
        author.onclick = () => {

            for (let author of authors) {
                author.classList.remove('selected');
            }
            
            author.classList.add('selected');

            let books = document.querySelectorAll('.book');

            for (let book of books) {
                book.style.width = "240px";
                book.style.height = "350px";
                if (!(book.getAttribute('data-author') == author.getAttribute('data-author'))) {
                    book.style.display = "none";    
    
                    if (author.getAttribute('data-author') == "All") {
                        book.style.display = "block";
                        book.style.width = "170px";
                        book.style.height = "260px";
                    }   
                } 
                else {
                    book.style.display = "block";
                }
    
            }
        }
    }
}

getExperience = () => {
    let IntelData = document.querySelectorAll('.mainBody .body .knowledge .list .list_item p span');
    for (let i = 0; i < IntelData.length; i++) {

        let sum = parseInt(IntelData[i].textContent, 10);
        exp += sum * Attributes["Intelligence"];

        let bars = document.querySelectorAll('.mainBody .body .knowledge .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let LangData = document.querySelectorAll('.mainBody .body .languages .list .list_item p span');
    for (let i = 0; i < LangData.length; i++) {

        let sum = parseInt(LangData[i].textContent, 10);
        exp += sum * 1.5;

        let bars = document.querySelectorAll('.mainBody .body .languages .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let ArtData = document.querySelectorAll('.mainBody .body .art .list .list_item p span');
    for (let i = 0; i < ArtData.length; i++) {

        let sum = parseInt(ArtData[i].textContent, 10);
        exp += sum * Attributes["Sense of beauty"];
    }

    let OtherData = document.querySelectorAll('.mainBody .body .other .list .list_item p span');
    for (let i = 0; i < OtherData.length; i++) {

        let sum = parseInt(OtherData[i].textContent, 10);
        exp += sum;

        let bars = document.querySelectorAll('.mainBody .body .other .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let AchieveData = document.querySelectorAll('.mainBody .body .achievements .list .list_item p span');
    for (let i = 0; i < AchieveData.length; i++) {

        let sum = parseInt(AchieveData[i].textContent, 10);
        exp += sum;
    }

    let CodingData = document.querySelectorAll('.mainBody .body .coding .list .list_item p span');
    for (let i = 0; i < CodingData.length; i++) {

        let sum = parseInt(CodingData[i].textContent, 10);
        exp += sum;
        
        let bars = document.querySelectorAll('.mainBody .body .coding .list .list_item .prog .ress');
        bars[i].style.width = `${sum * 100 / 10000}%`;
    }

    let TravelData = document.querySelectorAll('.mainBody .body .travel .list .list_item p');
    exp += TravelData.length * 200;

    let ParticipData = document.querySelectorAll('.mainBody .body .participations .list .list_item p');
    exp += ParticipData.length * 1000;

    let AgeValue = document.querySelector('.header .age h1').textContent;
    exp += (parseInt(AgeValue, 10) - 12) * 1000;
}

getLevel = () => {
    for (let n = 1; n <= 20; n++) {

        let number = n * 1000;
        levelArray.push(number);    
    }

    for (let i = 1; i < levelArray.length; i++) {
        levelArray[i] = levelArray[i] + levelArray[i - 1];

        if (levelArray[i] < exp) level = i + 2;
    }

    let levelBar = document.querySelector('.level .levelBar  .bar_progress');
    let needToNewLevel = levelArray[level - 1] - levelArray[level - 2];
    let haveOfThisLevel = exp - levelArray[level - 2];
    let needToNewLevelMinusHaveOfThisLevel = levelArray[level - 1] - exp;

    levelBar.style.width = `${100 - (needToNewLevelMinusHaveOfThisLevel * 100 / needToNewLevel)}%`;
    document.querySelector('.header .level .levelBar span').textContent = `${haveOfThisLevel} / ${needToNewLevel}`;

    // console.log(levelArray);
    // console.log(exp);
    console.log(`Level ${level}`);
    console.log(`You need ${levelArray[level - 1] - exp} experience to reach level ${level + 1}.`);
}

getAttributes();
getAuthors();
getExperience();
getLevel();


let head = document.querySelector('.header .level h1');
let subHead = document.querySelector('.header .level h3');
head.textContent = `Level ${level}`;
subHead.textContent = `You need ${levelArray[level - 1] - exp} experience to reach level ${level + 1}.`;
