import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinPortfolio.css';


import { Document, Page } from 'react-pdf';
// import Lebenslauf from "../img/Lebenslauf.pdf"

const closeWindow = (el) => {
  el.target.parentElement.parentElement.style.display = 'none';
}

const WinPortfolio = (props) => {

  return (
    <div className="window portfolio" data-name="Portfolio">
        <div className="controls">
            <div className="closeBtn" onClick={closeWindow}></div>
        </div>

        <div className="windowContent">
            <object data="https://jefferston.github.io/portfolio/Lebenslauf.pdf" type="application/pdf" width="100%" height="100%"/>
        </div>
    </div>
  );
}

export default WinPortfolio;