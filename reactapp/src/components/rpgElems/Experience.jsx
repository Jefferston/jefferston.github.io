import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'

const getExperience = (el) => {
    let count = 0;

    let Age = 25;
    count += (Age - 12) * 1000;

    let numberOfBooks = 16;
    count += numberOfBooks * 100;

    // TODO
    let mainCitiesOfGermany = 
        ['Munich', 'Nuremberg', 'Berlin', 'Stuttgart', 'Koln', 'Aachen', 'Bremen', 'Hamburg', 'Ruhr-Aglomerance', 'Koblenz-Trier'];
    let mainCitiesOfNetherlands = ['Rotterdam', 'Hague', 'Amsterdam'];

    // if >2 then; max 10
    count += (mainCitiesOfGermany.length - 1) * 100;
    count += (mainCitiesOfNetherlands.length - 1) * 100;


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

    // console.log(levelArray);
    // console.log(count)
    // console.log(`Level ${level}`);
    // console.log(`You need ${needToNewLevelMinusHaveOfThisLevel} experience to reach level ${level + 1}.`);
}


// const nextWindow = el => {
//     el.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';

//     let gal = document.querySelector('.galWindow');
//     gal.style.display = "block";
//     gal.style.visibility = "visible";
// }




class Experience extends React.Component {
    render() {

        return (
            <div className="rpgTop">
                <div>25, Battle mage</div>
                <ul>
                    <li><span>7</span>Inteligence</li>
                    <li><span>7</span>Charisma</li>
                    <li><span>7</span>Will</li>
                    <li><span>8</span>Sense of beauty</li>
                    <li><span>5</span>Luck</li>
                </ul>
                <div className="lvl">Level <span>1</span></div>
                <div className="experience"></div>
                <div className="lvlProg"><span>Content here</span><div className="lvlRess"></div></div>
                <div className="traits">Here will be traits</div>
                {/* <div className="mobileSwitch">
                    <div className="mobilePrev">Prev</div>
                    <div className="mobileNext" onClick={nextWindow}>Next</div>
                </div> */}
            </div>
        );
    }

    componentDidMount() {
        getExperience()
      }
}

export default Experience;