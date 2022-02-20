import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';
import Progress from './Progress';


const StandartBlock = (props) => {

  return (
    <div className="glass">
        <h1>{props.name}</h1>
        <Progress name="English" value="6000"></Progress>
        <div className="add"></div>
    </div>
  );
}

export default StandartBlock;