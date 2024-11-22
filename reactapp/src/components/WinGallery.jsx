import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinGallery.css';


const switchTags = () => {
  let tags = document.querySelectorAll('.tagFinder p');
  let taggeds = document.querySelectorAll('.post');

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
          tagged.style.display = "flex";
        }
      }
    }

    if (tag.getAttribute('data-type') === "All") {
      tag.onclick = () => {
        for (let tagged of taggeds) tagged.style.display = "flex";

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
                      <h1>The place where I post the cool cities I've visited</h1>
                      <div className="tagFinder">
                        <p data-type="All" className="genre-selected">All countries</p>
                        <p data-type="Germany">Germany</p>
                        <p data-type="Austria">Austria</p>
                        <p data-type="Belgium">Belgium</p>
                        <p data-type="Other">Other</p>
                      </div>
                  </div>

                  <div className="postContainer">
                    <div className="post" data-type="Germany">
                      <div className="cityPhoto munchen"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Munchen</div>
                        <div className="p"><span>Date: </span>08.08.2018 and many times more</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          People are looking good; Highest salaries in the country;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Austria">
                      <div className="cityPhoto salzburg"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Salzburg</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Surrounded by mountains;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Other">
                      <div className="cityPhoto kotor"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Kotor</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Fortress on the mountain; Near the see;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Germany">
                      <div className="cityPhoto koln"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Koln</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          A lot of action to discover;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Germany">
                      <div className="cityPhoto achen"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Aachen</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Amazing cathedral; Student's city; Bordering Belgium and Netherlands;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Belgium">
                      <div className="cityPhoto brussels"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Brussels</div>
                        <div className="p"><span>Date: </span>04.01.2020</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Belgium beer; Atmosphere of internationalism;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Germany">
                      <div className="cityPhoto tubingen"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Tubingen</div>
                        <div className="p"><span>Date: </span>25.02.2021 - 30.08.2021</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Rent is very damn expensive; Nice center and old town; Student's city;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Other">
                      <div className="cityPhoto zurich"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Zurich</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          It is Switzerland;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Germany">
                      <div className="cityPhoto bremen"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Bremen</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Good infrastructure; Several old-town discticts; A lot of random events everywhere; Nice atmosphere;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Germany">
                      <div className="cityPhoto hamburg"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Hamburg</div>
                        <div className="p"><span>Date: </span>Check inst</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Many buildings are built on water; Many unique restaraunts; Enormous philharmonic; Great museums;
                        </div>
                      </div>
                    </div>

                    <div className="post" data-type="Other">
                      <div className="cityPhoto luxembourg"></div>
                      <div className="cityDescr">
                        <div className="p"><span>Name: </span>Luxembourg</div>
                        <div className="p"><span>Date: </span>05.08.2022</div>
                        <div className="p">
                          <span>Things that make city special: </span>
                          Level-based relief; Good infrastructure; Many unique shops and restaraunts;
                        </div>
                      </div>
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