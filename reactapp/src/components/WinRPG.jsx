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

                  {/* Add field "Last update" */}

                  <StandartBlock name="Knowledge" type="Knowledge">
                    <StandartBlockItem name="Engineering" value="1000"></StandartBlockItem>
                    <StandartBlockItem name="Programming" value="1200"></StandartBlockItem>
                    <StandartBlockItem name="Economics" value="1500"></StandartBlockItem>
                  </StandartBlock>

                  <StandartBlock name="Languages" type="Languages">
                    <StandartBlockItem name="English" value="10000"></StandartBlockItem>
                    <StandartBlockItem name="Deutsch" value="6300"></StandartBlockItem>
                    <StandartBlockItem name="French" value="800"></StandartBlockItem>
                  </StandartBlock>


                  <StandartBlock name="Other skills" type="Other">
                    <StandartBlockItem name="World comprehension" value="5600"></StandartBlockItem>
                    <StandartBlockItem name="Driving" value="4000"></StandartBlockItem>
                    <StandartBlockItem name="Company slave" value="3200"></StandartBlockItem>                   
                    {/* <StandartBlockItem name="Fencing / Swords" value="0"></StandartBlockItem> */}
                    {/* <StandartBlockItem name="Mask making / Swords" value="0"></StandartBlockItem> */}
                  </StandartBlock>

                  <StandartBlock name="Achievements">
                    <div className="countBlockContainer">
                      <CountBlock name="Bachelor's degree" value="10000"></CountBlock>
                      <CountBlock name="Degree in technical field" value="2000"></CountBlock>
                      <CountBlock name="Living abroad" value="5000"></CountBlock>
                      {/* <CountBlock name="Permanent obtained" value="5000"></CountBlock> */}
                      <CountBlock name="Fluency* in 2 foreign languages" value="10000"></CountBlock>
                      <CountBlock name="Perfect storm 2020" value="1000"></CountBlock>
                      <CountBlock name="Developed a blog" value="500"></CountBlock>
                      <CountBlock name="Money earned" value="1000"></CountBlock>
                      <CountBlock name="Mountain peaks reached" value="2000"></CountBlock>
                    </div>
                  </StandartBlock>

                  <StandartBlock name="Art" type="Art">
                    <div className="countBlockContainer">
                      <CountBlock name="Monster" value="1620"></CountBlock>
                      <CountBlock name="Dancing in the fire" value="830"></CountBlock>
                      <CountBlock name="Multiverse" value="150"></CountBlock>
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
                      <CountBlockCountries name="Denmark"></CountBlockCountries>
                      <CountBlockCountries name="Sweden"></CountBlockCountries>
                    </div>
                  </StandartBlock>
                  
                </div>

        </div>
    </div>
  );
}

export default WinRPG;