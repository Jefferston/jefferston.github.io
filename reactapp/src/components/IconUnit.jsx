import React from 'react';
import '../index.css';
import '../styles/IconUnit.css';
// import '../scripts/icons.js';


const openWindow = (el) => {
  let iconArray = document.querySelectorAll(".iconUnit");
  let windowArray = document.querySelectorAll(".window");

  for (let icon of iconArray) {

    icon.addEventListener('mouseover', (el) => {
      icon.addEventListener('click', (el) => {
        for (let icon of iconArray) {
            icon.classList.remove('selected');
        }
        el.currentTarget.classList.add('selected');
      })
    })

    icon.addEventListener('dblclick', (el) => {
        let text = el.currentTarget.querySelector('.icon_text');
        for (let window of windowArray) {
            if (window.getAttribute('data-name') === text.textContent) {
                window.style.display = 'block';
            }
        }
        for (let icon of iconArray) {
            icon.classList.remove('selected');
        }
    })
  }
}


const IconUnit = (props) => {
  return (
    <div className="iconUnit" onMouseOver={openWindow}>
        <div className={`icon ${props.classNm}`}></div>
        <div className="icon_text">{props.text}</div>
    </div>
  );
}

export default IconUnit;