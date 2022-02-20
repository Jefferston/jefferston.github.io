import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';
import StandartBlock from './StandartBlock';
import StandartBlockItem from './StandartBlockItem';
import CountBlock from './CountBlock';

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
                  <StandartBlock name="Languages">
                    <StandartBlockItem name="English" value="6000"></StandartBlockItem>
                    <StandartBlockItem name="Deutsch" value="3000"></StandartBlockItem>
                  </StandartBlock>

                  {/* <StandartBlock name="Knowledge">
                    <StandartBlockItem name="Something" value="9000"></StandartBlockItem>
                  </StandartBlock> */}

                  <StandartBlock name="Knowledge">
                    <div className="countBlockContainer">
                      <CountBlock name="Something" value="9000"></CountBlock>
                      <CountBlock name="Something else" value="9000"></CountBlock>
                      <CountBlock name="And govno" value="9000"></CountBlock>
                    </div>
                  </StandartBlock>
                </div>

        </div>
    </div>
  );
}

export default WinRPG;