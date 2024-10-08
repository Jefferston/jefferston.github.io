import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';
import StandartBlock from './rpgElems/StandartBlock';
import StandartBlockItem from './rpgElems/StandartBlockItem';
import CountBlock from './rpgElems/CountBlock';
import CountBlockCountries from './rpgElems/CountBlockCountries';
import Experience from './rpgElems/Experience';


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
                    <StandartBlockItem name="Programming" value="1000"></StandartBlockItem>
                    <StandartBlockItem name="Economics" value="1500"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Languages" type="Languages">
                    <StandartBlockItem name="English" value="10000"></StandartBlockItem>
                    <StandartBlockItem name="Deutsch" value="4000"></StandartBlockItem>
                    <StandartBlockItem name="French" value="400"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Job experience" type="JobExp">
                    <StandartBlockItem name="Analyst" value="1300"></StandartBlockItem>
                    <StandartBlockItem name="Manager" value="1100"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Other skills" type="Other">
                    <StandartBlockItem name="World comprehension" value="5400"></StandartBlockItem>
                    <StandartBlockItem name="Driving" value="3500"></StandartBlockItem>
                    <StandartBlockItem name="Cybersport" value="2500"></StandartBlockItem>                    
                    <StandartBlockItem name="Fencing / Swords" value="0"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Achievements">
                    <div className="countBlockContainer">
                      <CountBlock name="Bachelor's degree" value="10000"></CountBlock>
                      <CountBlock name="Living abroad" value="5000"></CountBlock>
                      <CountBlock name="Fluency* in 2 foreign languages" value="10000"></CountBlock>
                      <CountBlock name="Perfect storm 2020" value="2000"></CountBlock>
                      <CountBlock name="Developed a blog" value="500"></CountBlock>
                      <CountBlock name="Money earned" value="900"></CountBlock>
                      <CountBlock name="Mountain peaks reached" value="2000"></CountBlock>
                      <CountBlock name="Career block" value="0"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Art" type="Art">
                    <div className="countBlockContainer">
                      <CountBlock name="Monster" value="1600"></CountBlock>
                      <CountBlock name="Dancing in the fire" value="800"></CountBlock>
                      <CountBlock name="Personal site" value="100"></CountBlock>
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
                      <CountBlockCountries name="Luxembourg"></CountBlockCountries>
                      <CountBlockCountries name="Turkey"></CountBlockCountries>
                      <CountBlockCountries name="Britain"></CountBlockCountries>
                      <CountBlockCountries name="Italy"></CountBlockCountries>
                    </div>
                  </StandartBlock>
                  
                </div>

        </div>
    </div>
  );
}

export default WinRPG;