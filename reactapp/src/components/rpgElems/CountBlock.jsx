import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'


const CountBlock = (props) => {

    return (
        <div className="countItem">
            <div className="itemHead">
                <div className="itemName"><span>{props.name}</span> <span className="valueSpan">{props.value}</span></div>
            </div>
        </div>
  );
}

export default CountBlock;