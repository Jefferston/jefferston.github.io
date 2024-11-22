import React from 'react';
import '../index.css';
import '../styles/Window.css';
import '../styles/WinPortfolio.css';


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
		<div className="partOne AboutMeMain">
			<div className="MePresentation">
				<div className="MeOnePhoto"></div>
				<div className="MeOneName">
					<div className="MeOneName_Main">Dmitrii Sokololoev</div>
					<div className="MeOneName_Pathos">I will eat you.</div>
				</div>
			</div>
		</div>
		<div className="partTwo AboutMeMain">
			<div className="MeStory">
				<div className="MeTwoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni a, magnam repellendus ipsam corporis ab necessitatibus repellat? Perspiciatis, nesciunt earum. Doloribus accusamus provident rerum libero dignissimos mollitia qui reprehenderit.</div>
				<div className="MeTwoPhoto"></div>
			</div>
		</div>

        </div>
    </div>
  );
}

export default WinPortfolio;