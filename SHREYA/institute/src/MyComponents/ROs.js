import React from 'react'
import { Container } from 'react-bootstrap'
// import './css.firstpg.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Chartpic = new URL("./images/chart.png", import.meta.url)
const logo = new URL("./images/logos.png", import.meta.url)
const cal = new URL("./images/cal.png", import.meta.url)
// import iccr from './iccr.jpg';
// import iccr_logo from './iccr_logo.png';
// import aazadi from './aazadi.png';
// import chasma from './chasma.png';
// import 


export const ROs = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>

            <div>
                {/* <div className="head">
                    <div>
                        <img id="img1" src={iccr_logo} alt="" />
                        <img id="img2" src={aazadi} alt="Logo" />
                        <img id="img3" src={chasma} alt="Logo" />
                        <img id="img4" src={iccr} alt="Logo" />
                    </div>

                  


                    <div id="first-1">
                        <div className="nav-links">

                            <NavLink to='/'>Home</NavLink>

                            <NavLink to='/'>About Us</NavLink>
                            <NavLink to='/scholarship'>Scholarship</NavLink>
                            <NavLink to='/'>Photo Gallery</NavLink>
                            <NavLink to='/'>Video Gallery</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                            <NavLink to='/'>Feedback</NavLink>
                        </div>
                    </div>
                </div> */}
                <h2>ICCR's Activities</h2>
                <span className='line'></span>
                <div className='box'>
                    <img className='dia' src={Chartpic} />
                    <p > The Online Monitoring and Evaluation System for ICCR’s Regional Offices(ROs), the solution proposes to divide the activities in three different types.<br />
                        The activities would be classified as:<br />
                        • ICCR Annual Calendar Activity: Regional Office have to select minimum number of prescribed activities from annual calendar, conduct them and upload their report.<br />
                        • Self-Driven Activities: Regional Offices are situated in states with diverse cultures, thus regional offices are encouraged to conduct self-driven activities promoting regional culture.<br />
                        • ICCR HQ Driven Activities: The ICCR HQ at national level may also conduct activities different from Annual Calendar, RO’s will participate in those activities and upload its report.<br />
                    </p>

                </div>
                <div  >
                    <img className='Logoimg' src={logo} />
                </div>
                <div className="content-container">
                    <div className="row">

                        <div className="left-panel box">
                            <div className="news">
                                <h1>Latest News</h1>
                                <div className="newsItems border"  >
                                    <div>

                                        ⦁ Tripartite agreement for online three months Hindi Awareness course. <br /><br />
                                        ⦁ SVCC's event - Celebration of Rashtriya Ekta Week-Days 6. <br /><br />
                                        ⦁ SVCC's event “Celebration of Rashtriya Ekta Week- Day 4. <br /><br />
                                        ⦁ Advertisement for Consultant and Jr. Consultant for G-20 Project of ICCR. <br /><br />
                                        ⦁ Tripartite agreement for online three months Hindi Awareness course. <br /><br />
                                        ⦁ SVCC's event - Celebration of Rashtriya Ekta Week-Days 6. <br /><br />
                                        ⦁ SVCC's event “Celebration of Rashtriya Ekta Week- Day 4. <br /><br />
                                        ⦁ Advertisement for Consultant and Jr. Consultant for G-20 Project of ICCR. <br /><br />
                                        ⦁ Tripartite agreement for online three months Hindi Awareness course. <br /><br />
                                        ⦁ SVCC's event - Celebration of Rashtriya Ekta Week-Days 6. <br /><br />
                                        ⦁ SVCC's event “Celebration of Rashtriya Ekta Week- Day 4. <br /><br />
                                        ⦁ Advertisement for Consultant and Jr. Consultant for G-20 Project of ICCR. <br /><br />
                                        ⦁ Tripartite agreement for online three months Hindi Awareness course. <br /><br />
                                        ⦁ SVCC's event - Celebration of Rashtriya Ekta Week-Days 6. <br /><br />
                                        ⦁ SVCC's event “Celebration of Rashtriya Ekta Week- Day 4. <br /><br />
                                        ⦁ Advertisement for Consultant and Jr. Consultant for G-20 Project of ICCR. <br /><br />
                                        ⦁ Tripartite agreement for online three months Hindi Awareness course. <br /><br />
                                        ⦁ SVCC's event - Celebration of Rashtriya Ekta Week-Days 6. <br /><br />
                                        ⦁ SVCC's event “Celebration of Rashtriya Ekta Week- Day 4. <br /><br />
                                        ⦁ Advertisement for Consultant and Jr. Consultant for G-20 Project of ICCR. <br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-panel box">
                            <img  className="calendar"src={cal} />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default ROs
