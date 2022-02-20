import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';
import StandartBlock from './StandartBlock';

const closeWindow = (el) => {
  el.target.parentElement.parentElement.style.display = 'none';
}

const WinRPG = () => {

  return (
    <div className="window rpgWindow" data-name="RPG">
        <div className="controls">
            <div className="closeBtn" onClick={closeWindow}></div>
        </div>

        <div className="windowContent">
                <div className="rpgBody">
                  <StandartBlock name="Languages"></StandartBlock>
                </div>

        </div>
    </div>
  );
}

export default WinRPG;