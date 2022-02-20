import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';

const getExperience = (el) => {
    let count = 0

    let exp = document.querySelector('.experience')
    let valNorm = document.querySelectorAll('.prog span')
    let valCount = document.querySelectorAll('.countItem .valueSpan')
    let valCountry = document.querySelectorAll('.countItem .country')

    for (let value of valNorm) {
        if (value.parentElement.parentElement.parentElement.getAttribute("data-type") === "Knowledge") {
            count += Number(value.textContent)*7
        }
        else {
            count += Number(value.textContent)
        }
    }

    for (let value of valCount) {
        count += Number(value.textContent)
    }

    count += (valCountry.length * 2000)

    exp.textContent = count;
}

class Experience extends React.Component {
    render() {

        return (
            <div className="experience">100</div>
        );
    }

    componentDidMount() {
        getExperience()
      }
}

export default Experience;