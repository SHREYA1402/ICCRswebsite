import React from 'react'
import './Firstpage.css';
import myasimg from './myasimg.png';
import aazadi from './aazadi.png';
import chasma from './chasma.png';
function App() {
    return (
        <>
            <div className="head">
                <div>
                    <img id="img1" src={myasimg} alt="" />
                    <img id="img2" src={aazadi} alt="Logo" />
                    <img id="img3" src={chasma} alt="Logo" />
                </div>
                <div id="first">
                    <h3>Government of India</h3>
                </div>
            </div>
            <section className="header">
                <nav>
                    <div className="nav-links">
                        <ul>
                            <li><a href="first-page.html">HOME</a></li>
                            <li><a href="about-us.html">ABOUT</a></li>
                            <li><a href="contact-us.html">CONTACT</a></li>
                            <li><a href="log-out.html">LOG OUT</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="content">
                    <h1>Fitness & <br /><span> Sports</span></h1>
                    <p className="par">The population of India majorly comprises of youths.<br /> Therefore,
                        it is necessary not only to address problems <br /> faced by the youths but also provide
                        them opportunities to grow.
                    </p>

                    <div className="form">

                        <button> <a href="GroundReg.js">Register as Ground Authority </a> </button><br />
                        <button> <a href="GroundReg.js">Register as Event Organiser </a> </button><br />
                        <button> <a href="club-reg.html">Register as Club Organiser </a> </button><br />
                        <p>Already registered? <a href="sign-ground.html">sign in</a></p>

                    </div>

                </div>

            </section>
        </>

    );
}

export default App;