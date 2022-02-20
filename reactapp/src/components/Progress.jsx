import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinRPG.css';



const Progress = (props) => {

  return (

        <div className="item">
            <div className="itemHead">
                <div className="itemName">{props.name}</div>
                {/* <div className="itemButtons">
                    <div className="button buttonGreen"></div>
                    <div className="button buttonRed"></div>
                </div> */}
            </div>

            <div className="prog">
                <span>{props.value}</span>
                <div className="ress"></div>
            </div>
        </div>

  );
}

export default Progress;