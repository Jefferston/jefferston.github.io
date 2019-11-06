import React from 'react';
import { Link } from 'react-router-dom';

export default function Greeting(){
    return (
        <div className="home">

            <div className="greeting">

                <div className="greeting-ava wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s"></div>

                <div className="greeting-hi">

                    <div>
                        <h1>
                            <p className="wow fadeInLeftBig">H</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".2s">i</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">,</p>
                        </h1>

                        <h1>
                            <p className="wow fadeInLeftBig">I</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".2s">'</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">m</p> <p className="wow fadeInLeftBig">D</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">m</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".4s">i</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".5s">t</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".6s">r</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".4s">i</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".5s">i</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".7s">,</p>
                        </h1>

                        <h1>
                            <p className="wow fadeInLeftBig">w</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".2s">e</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">b</p> <p className="wow fadeInLeftBig">d</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".2s">e</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">v</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".4s">e</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".5s">l</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".4s">o</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".3s">p</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".5s">e</p>
                            <p className="wow fadeInLeftBig" data-wow-delay=".6s">r</p>
                        </h1>            
                    </div>

                    <h2 className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">Javascript / React / Next.js</h2>

                    <div className="contactMe wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s">
                        <Link to='/contacts'>Contact me</Link>
                    </div>

                </div>

            </div>
        
            <div className="cutePart wow fadeIn" data-wow-delay="1.4s">
                <div>
                    <h2>Schön dich kennen zu lernen.</h2>
                    <p>I am a young Junior Frontend Developer from Moscow, now located in Essen, Germany. And this is my portfolio, where I tried to contain all information about me that I can give. I do not consider myself as a designer, I'm not a big fan of CSS, my passion is coding. But I like making peculiar interfacies for my projects and this portfolio might be an example of my style.</p>
                </div>
            </div>

            <div className="engineering">
                <div>young</div>
                <div>daring</div>
                <div>smart</div>
                <div>creative</div>
            </div>

        </div>
    )
}