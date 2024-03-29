import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';

const getExperience = (el) => {
    let count = 0;

    let Age = 23;
    count += (Age - 12) * 1000;

    let numberOfBooks = 16;
    count += numberOfBooks * 100;

    let exp = document.querySelector('.experience')
    let valNorm = document.querySelectorAll('.prog span')
    let valCount = document.querySelectorAll('.countItem .valueSpan')
    let valCountry = document.querySelectorAll('.countItem .country')

    for (let value of valNorm) {
        if (value.parentElement.parentElement.parentElement.getAttribute("data-type") === "Knowledge") {
            count += Number(value.textContent) * 7
        }

        if (value.parentElement.parentElement.parentElement.getAttribute("data-type") === "Languages") {
            count += Number(value.textContent) * 1.5
        }

        else {
            count += Number(value.textContent)
        }
    }

    for (let value of valCount) {
        if (value.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("data-type") === "Art") {
            count += Number(value.textContent) * 8
        }
        count += Number(value.textContent)
    }

    count += (valCountry.length * 200)


    // From here level
    let lvl = document.querySelector('.lvl');
    let levelArray = [];
    let level = 1;


    for (let n = 1; n <= 20; n++) {

        let number = n * 1000;
        levelArray.push(number);    
    }

    for (let i = 1; i < levelArray.length; i++) {
        levelArray[i] = levelArray[i] + levelArray[i - 1];

        if (levelArray[i - 1] <= count) level = i + 1;
    }

    let needToNewLevel = 1000
    if (count >= 1000) needToNewLevel = levelArray[level - 1] - levelArray[level - 2];


    // console.log(levelArray[level - 1])
    
    let haveOfThisLevel = 0;
    if (count <= 1000) {
        haveOfThisLevel = count
    } 
    else {
        haveOfThisLevel = count - levelArray[level - 2];
    }

    let needToNewLevelMinusHaveOfThisLevel = needToNewLevel - haveOfThisLevel;

    exp.textContent = `You need ${needToNewLevelMinusHaveOfThisLevel} experience to reach level ${level + 1}.`;
    lvl.textContent = `Level ${level}`;

    let bar = document.querySelector('.lvlRess');
        bar.style.width = `${(haveOfThisLevel / needToNewLevel * 100)}%`

    let barLabel = document.querySelector('.lvlProg span');
    barLabel.textContent = `${haveOfThisLevel} / ${needToNewLevel}`;

    console.log(levelArray);
    console.log(count)
    // console.log(`Level ${level}`);
    // console.log(`You need ${needToNewLevelMinusHaveOfThisLevel} experience to reach level ${level + 1}.`);
}


//     let levelArray = [];
//     let level = 1;
//     // let Attributes = {
//     //     'Intelligence': 7,
//     //     'Charisma': 6,
//     //     'Will': 7,
//     //     'Sense of beauty': 8,
//     //     'Luck': 4
//     // };
//     // let Class = {
//     //     'Name': 'Adventurer',
//     //     'MainFocus': 'Economics: ',
//     //     'AdditionalFocus': 'art',
//     //     'HobbyFocus': 'World comprehension: ',
//     //     'Knowledge': 1.3,
//     //     'Area': 1.2,
//     //     'Hobby': 1.1
//     // };


class Experience extends React.Component {
    render() {

        return (
            <div className="rpgTop">
                <div>23, Working student</div>
                <ul>
                    <li><span>7</span>Inteligence</li>
                    <li><span>6</span>Charisma</li>
                    <li><span>7</span>Will</li>
                    <li><span>8</span>Sense of beauty</li>
                    <li><span>5</span>Luck</li>
                </ul>
                <div className="lvl">Level <span>1</span></div>
                <div className="experience"></div>
                <div className="lvlProg"><span>Content here</span><div className="lvlRess"></div></div>
                <div className="traits">Here will be traits</div>
            </div>
        );
    }

    componentDidMount() {
        getExperience()
      }
}

export default Experience;