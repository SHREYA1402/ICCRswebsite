import React from 'react'
import iccr_logo from './images/iccr_logo.png';
import { Container } from 'react-bootstrap';
import iccr from './images/iccr.jpg';
import aazadi from './images/aazadi.png';
import chasma from './images/chasma.png';

 import './ROs.css';
// //  import './RO_Firstpage.css';
//  import './firstpg.css'; 
 import '../Firstpage.css';

 import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Chartpic = new URL("./images/chart.png", import.meta.url)
const logo = new URL("./images/logos.png", import.meta.url)
const cal = new URL("./images/cal.png", import.meta.url)
// const iccr = new URL("./images/iccr.jpg", import.meta.url)

// const iccr_logo = new URL("./images/iccr_logo.png", import.meta.url)


// const aazadi = new URL("./images/aazadi.png", import.meta.url)

// const chasma = new URL("./images/chasma.png", import.meta.url)



export const ROs = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>

            <div>
                <div className="head">
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
                </div>
                <h2>ICCR's Activities</h2>
                <span className='line'></span>
                <div className='box_img'>
                    
                    <p > The Online Monitoring and Evaluation System for ICCR’s Regional Offices(ROs), the solution proposes to divide the activities in three different types.<br />
                        The activities would be classified as:<br />
                        • ICCR Annual Calendar Activity: Regional Office have to select minimum number of prescribed activities from annual calendar, conduct them and upload their report.<br />
                        • Self-Driven Activities: Regional Offices are situated in states with diverse cultures, thus regional offices are encouraged to conduct self-driven activities promoting regional culture.<br />
                        • ICCR HQ Driven Activities: The ICCR HQ at national level may also conduct activities different from Annual Calendar, RO’s will participate in those activities and upload its report.<br />
                    </p>
                    <img className='dia' src={Chartpic} />

                </div>
                <div  >
                    <img className='Logoimg' src={logo} />
                </div>
                <div className="content-container">
                    <div className="">

                        <div className="left-panel box calender_news">
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
                            <div>
                                    <img className="calendar" src={cal} />
                                    </div>
                        </div>

                        
                    </div>
                </div>

                <br /><br /><div className='table_ICCR'>
                    <table>
                        <thead>
                            <tr className='color'>
                                <th>Sr.No.</th>
                                <th>RO</th>
                                <th>Status</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='t1'>
                                <td>1</td>
                                <td>Delhi University</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>2</td>
                                <td>Ahmedabad</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>3</td>
                                <td>Bengaluru</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>4</td>
                                <td>Guwahati</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>5</td>
                                <td>Jammu</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>6</td>
                                <td>Kolkata</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>7</td>
                                <td>Lucknow</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>8</td>
                                <td>Mumbai</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>9</td>
                                <td>Patna</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>10</td>
                                <td>Pune</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>11</td>
                                <td>Shillong</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default ROs
