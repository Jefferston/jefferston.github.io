import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'


const StandartBlock = (props) => {

  return (
    <div className="glass" data-type={`${props.type}`}>
        <h1>{props.name}</h1>
        {props.children}
        <div className="add"></div>
    </div>
  );
}

export default StandartBlock;