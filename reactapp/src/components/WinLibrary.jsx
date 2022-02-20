import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinLibrary.css';



const closeWindow = (el) => {
  el.target.parentElement.parentElement.style.display = 'none';
}

const WinLibrary = (props) => {

  return (
    <div className="window libWindow" data-name="Library">
        <div className="controls">
            <div className="closeBtn" onClick={closeWindow}></div>
        </div>

        <div class="library">
                <h1>Useful books I have read</h1>
    
                <div class="topics">
                    <p data-topic="All" class="selected">All books</p>
                    <p data-topic="Economics">Economics</p>
                    <p data-topic="Politics">Politics</p>
                    <p data-topic="Finance">Finance</p>
                    <p data-topic="Coding">Coding</p>
                    <p data-topic="Math">Mathematics</p>
                    <p data-topic="Lean">Lean management</p>
                    <p data-topic="Data science">Data science</p>
                    <p data-topic="Management">Management</p>
                    <p data-topic="Research">Research</p>
                </div>
    
                <div class="container">
                    <div class="book princip_economics" data-topic="Economics" data-progress-status="finished">
                        <h2 class="books_title">Principles of Economics</h2>
                    </div>
    
                    <div class="book macroeconomics" data-topic="Economics" data-progress-status="finished">
                        <h2 class="books_title">Macroeconomics</h2>
                    </div>
    
                    <div class="book valuation" data-topic="Finance" data-progress-status="finished">
                        <h2 class="books_title">Damodaran on valuation</h2>
                    </div>
    
                    <div class="book why_nations_fail" data-topic="Politics" data-progress-status="finished">
                        <h2 class="books_title">Why nations fail</h2>
                    </div>
    
                    <div class="book eloquent_js" data-topic="Coding" data-progress-status="finished">
                        <h2 class="books_title">Eloquent JavaScript</h2>
                    </div>
    
                    <div class="book learn_sql" data-topic="Coding" data-progress-status="finished">
                        <h2 class="books_title">Learning SQL</h2>
                    </div>
    
                    <div class="book math_world" data-topic="Math" data-progress-status="in process">
                        <h2 class="books_title">The world of mathematics</h2>
                    </div>
    
                    <div class="book lean_management" data-topic="Lean" data-progress-status="finished">
                        <h2 class="books_title">Lean thinking</h2>
                    </div>
    
                    <div class="book out_crisis" data-topic="Lean" data-progress-status="finished">
                        <h2 class="books_title">Out of crisis</h2>
                    </div>
    
                    <div class="book data_science" data-topic="Data science" data-progress-status="finished">
                        <h2 class="books_title">Doing data science</h2>
                    </div>
    
                    <div class="book data_statistics" data-topic="Data science" data-progress-status="finished">
                        <h2 class="books_title">Statistics for data science</h2>
                    </div>
    
                    <div class="book minimum_bigdata" data-topic="Data science" data-progress-status="finished">
                        <h2 class="books_title">Theoretical minimum for big data</h2>
                    </div>
    
                    <div class="book leading_change" data-topic="Management" data-progress-status="finished">
                        <h2 class="books_title">Leading change</h2>
                    </div>
    
                    <div class="book economy_populism" data-topic="Research" data-progress-status="finished">
                        <h2 class="books_title">The Political Economy of Populism</h2>
                    </div>
                </div>
    
            </div>
    </div>
  );
}

export default WinLibrary;