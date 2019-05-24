import React from 'react';
import ExpForm from './ExpForm';

export default function About() {

    return (
        <div className="about">

            <div className="about-me">
                <div className="about-me-text">
                    <h1>About me</h1>
                    <p>I'm Dmitrii, a Junior Frontend Developer slash Engineer from Moscow currently located in Germany.
                        I was working for 6 months in medical company before I changed the country of living.</p>
                    <p>Mainly focusing on react applications and javascript animation.</p>
                </div>

                <div className="about-me-pics">
                    <div>
                        <h2>Developing</h2>
                        <p>In my blood</p>
                    </div>

                    <div>
                        <h2>Egineering</h2>
                        <p>In my heart</p>
                    </div>

                    <div>
                        <h2>Blogging</h2>
                        <p>Is my passion</p>
                    </div>

                    <div>
                        <h2>Traveling</h2>
                        <p>Is my life</p>
                    </div>
                </div>

                <div className="about-me-last">
                    <p>Currently I'm a workless student, amping up my skills for an up-to-date web developing.</p>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://jefferston.github.io/portfolio/portfolio.pdf?">Check my CV</a>
                </div>
            </div>



            <div className="about-edu">

                <div className="about-edu-intro">
                    <h1>Education</h1>
                </div>

                <div className="about-edu-mgsu">
                    <div></div>

                    <div>
                        <h2>Moscow State University of Civil Engineering</h2>
                        <small>2016 - 2018 (unfinished)</small>
                        <p>Bachelor in Civil Engineering </p>
                    </div>
                </div>

                <div className="about-edu-netology">
                    <div>
                        <h2>Netology University</h2>
                        <small>2017-2018</small>
                        <p>Courses of Frontend Developing</p>
                    </div>

                    <div></div>
                </div>
                
                <div className="about-edu-thd">
                    <div></div>

                    <div>
                        <h2>Technische Hochschule Deggendorf</h2>
                        <small>2018 - current time</small>
                        <p>Bachelor of Industrial engineering and Maintainance Operations</p>
                    </div>
                </div>

            </div>


            <div className="about-exp">
                <h1>Experience</h1>

                <ExpForm name="Netology LLC" time="1 year" position="Mentoring the students" description="Mentoring the students and assistance in making up the study program on React courses."/>

                <ExpForm name="Biosreda LLC" time="6 months" position="Frontend developer" description="Developing and supporting the client's side of the medical company that was trying to start I.C.O. (not very            successfully, by the way)."/>

                <ExpForm name="Studying" time="Currently" position="Student" description="Nowadays I'm studying in Germany and meanwhile trying to increase my skills by learning new web-technologies and
                practicing with old ones."/>

            </div>

            
        </div>
    )
}