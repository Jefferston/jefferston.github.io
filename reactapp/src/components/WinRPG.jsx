import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';
import StandartBlock from './StandartBlock';
import StandartBlockItem from './StandartBlockItem';
import CountBlock from './CountBlock';
import CountBlockCountries from './CountBlockCountries';
import Experience from './Experience';


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
                <div className="rpgHead">
                  <Experience></Experience>
                </div>

                <div className="rpgBody">
                  <StandartBlock name="Languages" type="Languages">
                    <StandartBlockItem name="English" value="6000"></StandartBlockItem>
                    <StandartBlockItem name="Deutsch" value="3000"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Knowledge" type="Knowledge">
                    <StandartBlockItem name="English" value="4000"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Achievements">
                    <div className="countBlockContainer">
                      <CountBlock name="Something" value="1000"></CountBlock>
                      <CountBlock name="Something else" value="2000"></CountBlock>
                      <CountBlock name="And govno" value="3000"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Achievements">
                    <div className="countBlockContainer">
                      <CountBlock name="Something" value="4000"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Travel">
                  <div className="countBlockContainer">
                      <CountBlockCountries name="Something"></CountBlockCountries>
                      <CountBlockCountries name="Something else"></CountBlockCountries>
                      <CountBlockCountries name="And govno"></CountBlockCountries>
                    </div>
                  </StandartBlock>
                </div>

        </div>
    </div>
  );
}

export default WinRPG;