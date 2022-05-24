import React from 'react';
import '../../index.css'
import '../../styles/Window.css'
import '../../styles/WinRPG.css'


const CountBlockCountries = (props) => {

    return (
        <div className="countItem">
            <div className="itemHead">
                <div className="itemName country">{props.name}</div>
            </div>
        </div>
  );
}

export default CountBlockCountries;