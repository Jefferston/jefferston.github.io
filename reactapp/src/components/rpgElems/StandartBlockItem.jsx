import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'
import Progress from './Progress';


const BlockItem = (props) => {

  return (
        <div className="item">
            <div className="itemHead">
                <div className="itemName">{props.name}</div>
                {/* <div className="itemButtons">
                    <div className="button buttonGreen"></div>
                    <div className="button buttonRed"></div>
                </div> */}
            </div>

            <Progress value={props.value}></Progress>
        </div>
  );
}

export default BlockItem;