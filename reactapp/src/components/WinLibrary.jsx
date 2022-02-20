import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinLibrary.css';

const getTopics = () => {
    let topics = document.querySelectorAll('.topics p');

    for (let topic of topics) {
        topic.onclick = () => {
            for (let topic of topics) {
                topic.classList.remove('genre-selected');
            }            
            topic.classList.add('genre-selected');

            let books = document.querySelectorAll('.book');

            for (let book of books) {
                if ((book.getAttribute('data-topic') === topic.getAttribute('data-topic'))) {
                    document.querySelector('.library .container').style.justifyContent = "center";
                    book.style.width = "260px";
                    book.style.height = "360px";
                }

                if (!(book.getAttribute('data-topic') === topic.getAttribute('data-topic'))) {
                    book.style.display = "none";    
    
                    if (topic.getAttribute('data-topic') === "All") {
                        for (let book of books) {
                            book.style.width = "220px";
                            book.style.height = "320px";
                            document.querySelector('.library .container').style.justifyContent = "start";
                            if (book.getAttribute('data-type') === topic.getAttribute('data-type')) {
                                book.style.display = "block";
                            }
                        }
                    }   
                } 
                else {
                    book.style.display = "block";
                }
    
            }
        }
    }
}

const switchTypes = () => {
    let types = document.querySelectorAll('.library .switcher p');
    let books = document.querySelectorAll('.book');
    let topics = document.querySelectorAll('.topics p');

    for (let type of types) {
        type.onclick = () => {
            for (let type of types) {
                for (let topic of topics) {
                    topic.classList.remove('genre-selected')
                    
                    if (topic.getAttribute('data-topic') === "All") {
                        topic.classList.add('genre-selected')
                    }
                }
                type.classList.remove('genre-selected');
            }            
            type.classList.add('genre-selected');

            for (let topic of topics) {
                if (!(topic.getAttribute('data-type') === type.getAttribute('data-type'))) {
                    topic.style.display = "none";    
     
                } 
                else {
                    topic.style.display = "block";
                }
            }  
    
            for (let book of books) {
                if (!(book.getAttribute('data-type') === type.getAttribute('data-type'))) {
                    book.style.display = "none";    
                } 
                else {
                    document.querySelector('.library .container').style.justifyContent = "start";
                    book.style.display = "block";
                    book.style.width = "220px";
                    book.style.height = "320px";
                }
            }
        }
    }

    const originalSettings = () => {    
        for (let topic of topics) {        
            if (topic.getAttribute('data-type') === "Professional") {
                topic.style.display = "block";
            }
            else {
                topic.style.display = "none";
            }
        }

        for (let book of books) {        
            if (book.getAttribute('data-type') === "Professional") {
                book.style.display = "block";
            }
            else {
                book.style.display = "none";
            }
        }
    }
    originalSettings()
}


getTopics()
switchTypes()


const closeWindow = (el) => {
  el.target.parentElement.parentElement.style.display = 'none';
}

class WinLibrary extends React.Component {
    render() {
        return (
            <div className="window libWindow" data-name="Library">
                <div className="controls">
                    <div className="closeBtn" onClick={closeWindow}></div>
                </div>

                <div class="library">
                        <h1>Useful books I have read</h1>
                        <div class="switcher">
                            <p data-type="Professional" class="genre-selected">Professional</p>
                            <p data-type="Stories">Stories</p>
                        </div>
            
                        <div class="topics" onMouseOver={getTopics}>
                            <p data-topic="All" data-type="Professional" class="genre-selected">All books</p>
                            <p data-topic="Economics" data-type="Professional">Economics</p>
                            <p data-topic="Politics" data-type="Professional">Politics</p>
                            <p data-topic="Finance" data-type="Professional">Finance</p>
                            <p data-topic="Coding" data-type="Professional">Coding</p>
                            <p data-topic="Math" data-type="Professional">Mathematics</p>
                            <p data-topic="Lean" data-type="Professional">Lean management</p>
                            <p data-topic="Data science" data-type="Professional">Data science</p>
                            <p data-topic="Management" data-type="Professional">Management</p>
                            <p data-topic="Research" data-type="Professional">Research</p>


                            <p data-topic="All" data-type="Stories" class="genre-selected">All authors</p>
                            <p data-topic="Agata_Christie" data-type="Stories">Agata Christie</p>
                            <p data-topic="A_Sapkovcki" data-type="Stories">Andzhei Sapkovski</p>
                            <p data-topic="Ayn_Rand" data-type="Stories">Ayn Rand</p>
                            <p data-topic="Chuck_Palahniuk" data-type="Stories">Chuck Palahniuk</p>
                            <p data-topic="Clive_Barker" data-type="Stories">Clive Barker</p>
                            <p data-topic="Douglas_Adams" data-type="Stories">Douglas Adams</p>
                            <p data-topic="Harper_Li" data-type="Stories">Harper Li</p>
                            <p data-topic="H_Lovecraft" data-type="Stories">Howard Lovecraft</p>
                            <p data-topic="J_Oruel" data-type="Stories">Jeorge Oruel</p>
                            <p data-topic="Markus_Zusak" data-type="Stories">Markus Zusak</p>
                            <p data-topic="Oldos_Hucksley" data-type="Stories">Oldos Hucksley</p>
                            <p data-topic="Richard_Matheson" data-type="Stories">Richard Matheson</p>
                            <p data-topic="Stieg_Larsson" data-type="Stories">Stieg Larsson</p>
                        </div>
            
                        <div class="container">
                            <div class="book princip_economics" data-topic="Economics" data-type="Professional">
                                <h2 class="books_title">Principles of Economics</h2>
                            </div>
            
                            <div class="book macroeconomics" data-topic="Economics" data-type="Professional">
                                <h2 class="books_title">Macroeconomics</h2>
                            </div>
            
                            <div class="book valuation" data-topic="Finance" data-type="Professional">
                                <h2 class="books_title">Damodaran on valuation</h2>
                            </div>
            
                            <div class="book why_nations_fail" data-topic="Politics" data-type="Professional">
                                <h2 class="books_title">Why nations fail</h2>
                            </div>
            
                            <div class="book eloquent_js" data-topic="Coding" data-type="Professional">
                                <h2 class="books_title">Eloquent JavaScript</h2>
                            </div>
            
                            <div class="book learn_sql" data-topic="Coding" data-type="Professional">
                                <h2 class="books_title">Learning SQL</h2>
                            </div>
            
                            <div class="book math_world" data-topic="Math" data-type="Professional">
                                <h2 class="books_title">The world of mathematics</h2>
                            </div>
            
                            <div class="book lean_management" data-topic="Lean" data-type="Professional">
                                <h2 class="books_title">Lean thinking</h2>
                            </div>
            
                            <div class="book out_crisis" data-topic="Lean" data-type="Professional">
                                <h2 class="books_title">Out of crisis</h2>
                            </div>
            
                            <div class="book data_science" data-topic="Data science" data-type="Professional">
                                <h2 class="books_title">Doing data science</h2>
                            </div>
            
                            <div class="book data_statistics" data-topic="Data science" data-type="Professional">
                                <h2 class="books_title">Statistics for data science</h2>
                            </div>
            
                            <div class="book minimum_bigdata" data-topic="Data science" data-type="Professional">
                                <h2 class="books_title">Theoretical minimum for big data</h2>
                            </div>
            
                            <div class="book leading_change" data-topic="Management" data-type="Professional">
                                <h2 class="books_title">Leading change</h2>
                            </div>
            
                            <div class="book economy_populism" data-topic="Research" data-type="Professional">
                                <h2 class="books_title">The Political Economy of Populism</h2>
                            </div>



                            <div class="book hell" data-topic="Clive_Barker" data-type="Stories"></div>
                            <div class="book mockin" data-topic="Harper_Li" data-type="Stories"></div>
                            <div class="book galaxy" data-topic="Douglas_Adams" data-type="Stories"></div>
                            <div class="book innsmut"  data-topic="H_Lovecraft" data-type="Stories"></div>
                            <div class="book legend" data-topic="Richard_Matheson" data-type="Stories"></div>
                            <div class="book choke" data-topic="Chuck_Palahniuk" data-type="Stories"></div>
                            <div class="book atlant" data-topic="Ayn_Rand" data-type="Stories"></div>
                            <div class="book niggers" data-topic="Agata_Christie" data-type="Stories"></div>
                            <div class="book oruel" data-topic="J_Oruel" data-type="Stories"></div>
                            <div class="book millennium1" data-topic="Stieg_Larsson" data-type="Stories"></div>
                            <div class="book millennium2" data-topic="Stieg_Larsson" data-type="Stories"></div>
                            <div class="book millennium3" data-topic="Stieg_Larsson" data-type="Stories"></div>
                            <div class="book geralt" data-topic="A_Sapkovcki" data-type="Stories"></div>
                            <div class="book ciri" data-topic="A_Sapkovcki" data-type="Stories"></div>
                            <div class="book world" data-topic="Oldos_Hucksley" data-type="Stories"></div>
                            <div class="book thief" data-topic="Markus_Zusak" data-type="Stories"></div>
                        </div>
            
                </div>

            </div>
        );
    }

  componentDidMount() {
    switchTypes()
  }
}

export default WinLibrary;