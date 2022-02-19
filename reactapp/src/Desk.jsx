import React from 'react';
import './index.css';
import IconUnit from './components/IconUnit.jsx';
import WinPortfolio from './components/WinPortfolio.jsx';
// import './img/Lebenslsauf.pdf'


const Desk = () => {
    // render() {
        return (
            <div className="desk">
                <div className="iconContainer">
                    <IconUnit text='Portfolio' classNm="iconMe"></IconUnit>
                    <IconUnit text='Library' classNm="iconBooks"></IconUnit>
                    <IconUnit text='Achievements' classNm="iconElse"></IconUnit>
                    <IconUnit text='Achievements' classNm="iconElse2"></IconUnit>
                </div>

                <WinPortfolio></WinPortfolio>
            </div>
            );
    // }
}

export default Desk;