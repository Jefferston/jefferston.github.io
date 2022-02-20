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

        <div class="windowContent">
                <div class="header">
                    <h1>Instagram was too dumb so I made my own</h1>
                </div>

                <div class="postContainer">
                    <div class="post inst-ein"></div>
                    <div class="post inst-zwei"></div>
                    <div class="post inst-drei"></div>
                    <div class="post inst-vier"></div>
                    <div class="post inst-funf"></div>
                    <div class="post inst-sechs"></div>
                </div>
            </div>
    </div>
  );
}

export default WinGallery;