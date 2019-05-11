import React from 'react';

export default function ExpForm({ name, time, position, description }) {
    return (
        <div className="about-exp-block">
            <div className="about-exp-block-name">
                <h2>{name}</h2>
                <p>{time}</p>
            </div>

            <div className="about-exp-block-desc">
                <h2>{position}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}