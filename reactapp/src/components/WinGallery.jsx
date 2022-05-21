import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinGallery.css';


const closeWindow = (el) => {
    el.target.parentElement.parentElement.style.display = 'none';
  }

const WinGallery = (props) => {

  return (
    <div className="window galWindow" data-name="Gallery">
        <div className="controls">
            <div className="closeBtn" onClick={closeWindow}></div>
        </div>

        <div className="windowContent">
                <div className="header">
                    <h1>Instagram was too dumb so I made my own</h1>
                </div>

                <div className="postContainer">
                    <div className="post inst-ein"></div>
                    <div className="post inst-zwei"></div>
                    <div className="post inst-drei"></div>
                    <div className="post inst-vier"></div>
                    <div className="post inst-funf"></div>
                    <div className="post inst-sechs"></div>
                    <div className="post inst-sieben"></div>
                    <div className="post inst-acht"></div>
                    <div className="post inst-neun"></div>
                    <div className="post inst-zehn"></div>
                    <div className="post inst-elf"></div>
                    <div className="post inst-zwolf"></div>
                </div>
            </div>
    </div>
  );
}

export default WinGallery;