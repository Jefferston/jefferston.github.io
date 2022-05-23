import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinGallery.css';


const switchTags = () => {
  let tags = document.querySelectorAll('.tagFinder p');
  let taggeds = document.querySelectorAll('.subContainer');

  for (let tag of tags) {
    tag.onclick = () => {

      for (let tag of tags) {
        tag.classList.remove('genre-selected')
          
          if (tag.getAttribute('data-topic') === "All") {
            tag.classList.add('genre-selected')
          }
          tag.classList.remove('genre-selected');
      }

      tag.classList.add('genre-selected');
      
      for (let tagged of taggeds) {
        if (!(tagged.getAttribute('data-type') === tag.getAttribute('data-type'))) {
          tagged.style.display = "none";    
        } 
        else {
          tagged.style.display = "grid";
        }
      }
    }

    if (tag.getAttribute('data-type') === "All") {
      tag.onclick = () => {
        for (let tagged of taggeds) tagged.style.display = "grid";

        for (let tag of tags) {
          tag.classList.remove('genre-selected')
        }
        tag.classList.add('genre-selected')
      }
    }
  }
}


const closeWindow = (el) => {
    el.target.parentElement.parentElement.style.display = 'none';
  }

class WinGallery extends React.Component {
  render() {

    return (
      <div className="window galWindow" data-name="Gallery">
          <div className="controls">
              <div className="closeBtn" onClick={closeWindow}></div>
          </div>

          <div className="windowContent">
                  <div className="header">
                      <h1>Instagram was too dumb so I made my own</h1>
                      <div className="tagFinder">
                        <p data-type="All" className="genre-selected">All photos</p>
                        <p data-type="Switz">Switzerland</p>
                      </div>
                  </div>

                  <div className="postContainer">
                    <div className="subContainer subContainer1" data-type="Switz">
                      <div className="post inst-ein"></div>
                      <div className="post inst-zwei"></div>
                      <div className="post inst-drei"></div>
                    </div>

                    <div className="subContainer subContainer2" data-type="Switz">
                      <div className="post inst-vier"></div>
                      <div className="post inst-funf"></div>
                      <div className="post inst-sechs"></div>
                    </div>
                      
                    <div className="subContainer subContainer3">
                      <div className="post inst-sieben"></div>
                      <div className="post inst-acht"></div>
                      <div className="post inst-neun"></div>
                      <div className="post inst-zehn"></div>
                      <div className="post inst-elf"></div>
                      <div className="post inst-zwolf"></div>
                    </div>

                  </div>
              </div>
      </div>
    );
  }

  componentDidMount() {
    switchTags()
  }
}

export default WinGallery;