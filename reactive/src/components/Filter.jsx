import React from 'react';

function getFilterCSSStyles(settings) {
    let filterString ='';

    for (let prop in settings) {
        if (settings.hasOwnProperty(prop)) {
            switch(prop) {
                case 'hue': 
                    filterString += 'hue-rotate(' + settings[prop] + 'deg) ';
                    break;
                default: 
                    filterString += prop + '(' + settings[prop] + '%) ';
            }
        }        
    }

    return filterString;

};  

export default function Filter({ children, name, settings, selected, onClick = () => {} }) {
    let filter = getFilterCSSStyles(settings);
    let style = { filter };
    let className = `filter${selected ? 'selected' : ''}`;

    return (
        <div className={className} onClick={() => onClick(name, settings)} >
            <div className='ImageContainer' style={style} >
                {children}
            </div>
        </div>
    );
}