import React from 'react';

export default function Image({ src }) {
    let style = { backgroundImage: `url(${src})` };

    return <div className='ImageBG' style={style} ></div>
}; 