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
                    <h3>Government of Maharastra</h3>
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

              

            </section>
            
        </>

    );
}

export default App;