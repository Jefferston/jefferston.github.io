import React from 'react';

export default function About() {
    return (
        <div className="about">
            <div className="about-text">
                <h1>About me</h1>
                <p>I'm a Junior Frontend Developer slash Engineer from Moscow currently located in Germany.
                        I was working for 6 months in medical company before I changed the country of living.</p>
                <p>Mainly focusing on react-applications and javascript-animation.</p>
                <p>Currently I'm a workless student, amping up my skills for an up-to-date web developing.</p>
            </div>

            <div className="about-edu">
                <h2>Education</h2>

                <h3>Bachelor in Civil Engineering</h3>
                <small>Moscow state university of civil engineering – 2016-2018 (unfinished)</small>

                <h3>Courses of Frontend development</h3>
                <small>Netology University - 2016</small>

                <h3>Bachelor in Industrial Engineering</h3>
                <small>Technische Hochschule Deggendorf – currently</small>
            </div>

            <div className="about-exp">
                <h2>Experience</h2>

                <div>
                    <h3>Netology LLC</h3>
                    <small>1 year</small>
                    <p>Mentoring the students and helping in making up the study program on React courses.</p>
                </div>

                <div>
                    <h3>Biosreda LLC</h3>
                    <small>6 months</small>
                    <p>Developing and supporting the client's side in one russian medical company.</p>
                </div>

                <div>
                    <h3>Studying</h3>
                    <small>currently</small>
                    <p>Nowadays I'm studying in Germany and meanwhile trying
                        to increase my skills by learning new web-technologies and
                        practicing with old ones.</p>
                </div>
            </div>
        </div>
    )
}