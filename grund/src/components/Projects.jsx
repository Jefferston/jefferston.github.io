import React from 'react';

export default function Skills() {

    return (
        <div className="projects">

            <h1>Projects</h1>

            <div className="projects-container">

                <div className="project-wrapper">
                    <a href="https://jefferston.github.io/fiolet/" target="_blank" rel="noopener noreferrer">
                        <div className="project first"></div>
                    </a>
                    <p>This is an example of multi-browser sitemaking.
                                    The entire project is made with sprites instead of normal pictures,
                                    tested with pixelPerfect to its photoshop layout
                                    and all that is without using Flexbox technilogy.</p>
                </div>

                <div className="project-wrapper">
                    <a href="https://jefferston.github.io/reactive/" target="_blank" rel="noopener noreferrer">
                        <div className="project second"></div>
                    </a>
                    <p>This is my first React-application.
							I have started to make it by guid on youtube, but very soon
							I decided to change some details, then some other details,
							and as result I have made something different, something that
							I called Reactogram, because it has instargam filters and it's
							made on react. Very smart, right?</p>
                </div>

                 <div className="project-wrapper">
                    <a href="https://jefferston.github.io/adventure/" target="_blank" rel="noopener noreferrer">
                        <div className="project third"></div>
                    </a>
                    <p>In this project I was using drag-and-drop API, Stack Owerflow
							and Google Search. The project must illustrate not how good I can work with dnd API,
							no, but how fast I can adapt to the new technoligies and how good I can find the
							information I need.</p>
                </div>

                 <div className="project-wrapper">
                    <a href="https://jefferston.github.io/reduxive/" target="_blank" rel="noopener noreferrer">
                        <div className="project fourth"></div>
                    </a>
                    <p>My exam work after finishing redux course on the platform Codedojo.ru.
							For this project I recieved the highest score and very happy about it.</p>
                </div>

            </div>

            
        </div>
    )
}