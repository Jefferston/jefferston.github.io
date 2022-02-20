import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';

// const aaa = (el) => {
//     console.log(el.currentTarget.parentElement.parentElement.parentElement)
//     el.currentTarget.parentElement.parentElement.parentElement.style.flexDirection = 'row'
// }

const CountBlock = (props) => {

    return (
        <div className="countItem">
            <div className="itemHead">
                <div className="itemName"><span>{props.name}:</span> <span>{props.value}</span></div>
            </div>
        </div>
  );
}

export default CountBlock;