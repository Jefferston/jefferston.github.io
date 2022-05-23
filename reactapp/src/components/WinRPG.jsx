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

                  <StandartBlock name="Knowledge" type="Knowledge">
                    <StandartBlockItem name="Engineering" value="1000"></StandartBlockItem>
                    <StandartBlockItem name="Programming" value="1200"></StandartBlockItem>
                    <StandartBlockItem name="Economics" value="1200"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Languages" type="Languages">
                    <StandartBlockItem name="English" value="10000"></StandartBlockItem>
                    <StandartBlockItem name="Deutsch" value="3000"></StandartBlockItem>
                    <StandartBlockItem name="French" value="100"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Job experience" type="JobExp">
                    <StandartBlockItem name="Data analyst" value="300"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Other skills" type="Other">
                    <StandartBlockItem name="Cybersport" value="2500"></StandartBlockItem>
                    <StandartBlockItem name="Driving" value="300"></StandartBlockItem>
                    <StandartBlockItem name="World comprehension" value="3200"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Achievements">
                    <div className="countBlockContainer">
                      <CountBlock name="Bachelor degree" value="10000"></CountBlock>
                      <CountBlock name="Living abroad" value="5000"></CountBlock>
                      <CountBlock name="Fluency in 2 foreign languages" value="10000"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Art" type="Art">
                    <div className="countBlockContainer">
                      <CountBlock name="Written book" value="1000"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Travel">
                    <div className="countBlockContainer">
                      <CountBlockCountries name="Austria"></CountBlockCountries>
                      <CountBlockCountries name="Germany"></CountBlockCountries>
                      <CountBlockCountries name="Romania"></CountBlockCountries>
                      <CountBlockCountries name="Spain"></CountBlockCountries>
                      <CountBlockCountries name="Netherlands"></CountBlockCountries>
                      <CountBlockCountries name="Moldova"></CountBlockCountries>
                      <CountBlockCountries name="Belgium"></CountBlockCountries>
                      <CountBlockCountries name="France"></CountBlockCountries>
                      <CountBlockCountries name="Montenegro"></CountBlockCountries>
                      <CountBlockCountries name="Switzerland"></CountBlockCountries>
                      <CountBlockCountries name="Liechtenstein"></CountBlockCountries>
                    </div>
                  </StandartBlock>
                  
                </div>

        </div>
    </div>
  );
}

export default WinRPG;