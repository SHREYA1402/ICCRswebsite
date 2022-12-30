import React from 'react'
import iccr_logo from './images/iccr_logo.png';
// import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    // const navigate = useNavigate()
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
                <br />
                {/* <h2>ICCR's Activities</h2>
                <span className='line_RO'></span>
                <div className='box_img_RO'>
                    
                    <p > The Online Monitoring and Evaluation System for ICCR’s Regional Offices(ROs), the solution proposes to divide the activities in three different types.<br />
                        The activities would be classified as:<br />
                        • ICCR Annual Calendar Activity: Regional Office have to select minimum number of prescribed activities from annual calendar, conduct them and upload their report.<br />
                        • Self-Driven Activities: Regional Offices are situated in states with diverse cultures, thus regional offices are encouraged to conduct self-driven activities promoting regional culture.<br />
                        • ICCR HQ Driven Activities: The ICCR HQ at national level may also conduct activities different from Annual Calendar, RO’s will participate in those activities and upload its report.<br />
                    </p>
                    <img className='dia_RO' src={Chartpic} />

                </div>
                <div  >
                    <img className='Logoimg_RO' src={logo} />
                </div>
                <div className="content-container_RO">
                    <div className="">

                        <div className="left-panel_RO box calender_news">
                            <div className="news_RO">
                                <div className="Heading_RO"><h1>Latest News</h1></div>
                                <div className="newsItems_RO border"  >
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
                                    <img className="calendar_RO" src={cal} />
                                    </div>
                        </div>

                        
                    </div>
                </div>

                <div className='table_RO'>
                    <table>
                        <thead>
                            <tr className='color_RO'>
                                <th>Sr.No.</th>
                                <th>RO</th>
                                <th>Status</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='t1_RO'>
                                <td>1</td>
                                <td>Delhi University</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>2</td>
                                <td>Ahmedabad</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>3</td>
                                <td>Bengaluru</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>4</td>
                                <td>Guwahati</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>5</td>
                                <td>Jammu</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>6</td>
                                <td>Kolkata</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>7</td>
                                <td>Lucknow</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>8</td>
                                <td>Mumbai</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>9</td>
                                <td>Patna</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>10</td>
                                <td>Pune</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>11</td>
                                <td>Shillong</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

<h2 className='h2_RO'>ICCR's Activities</h2>
                <span className='line_RO'></span>
                <div className='box_RO'>
                    <img className='dia_RO' src={Chartpic} />
                    <p className='p_RO'> The Online Monitoring and Evaluation System for ICCR’s Regional Offices(ROs), the solution proposes to divide the activities in three different types.<br />
                        The activities would be classified as:<br />
                        • ICCR Annual Calendar Activity: Regional Office have to select minimum number of prescribed activities from annual calendar, conduct them and upload their report.<br />
                        • Self-Driven Activities: Regional Offices are situated in states with diverse cultures, thus regional offices are encouraged to conduct self-driven activities promoting regional culture.<br />
                        • ICCR HQ Driven Activities: The ICCR HQ at national level may also conduct activities different from Annual Calendar, RO’s will participate in those activities and upload its report.<br />
                    </p>

                </div>
                <div  >
                    <img className='Logoimg_RO' src={logo} />
                </div>
                <div className="content-container_RO">
                    <div className="row">

                        <div className="left-panel_RO box_RO">
                            <div className="news_RO">
                                <h1>Latest News</h1>
                                <div className="newsItems_RO border"  >
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

                        <div className="right-panel_RO box_RO">
                            <img className="calendar_RO" src={cal} />
                        </div>
                    </div>
                </div>

                <br /><br />
                
                <h2 className='h2_RO'>Institutes</h2>
                <span className='line_RO'></span><br/>
                <div className='table_RO'>
                    <table>
                        <thead>
                            <tr className='color_RO'>
                                <th>Sr.No.</th>
                                <th>Institutes</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='t1_RO'>
                                <td>1</td>
                                <td>Bajaj Institute of Technology</td>
                                <td><button className="button1_RO" >View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>2</td>
                                <td>Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>3</td>
                                <td>College Of Engineering Pune</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>4</td>
                                <td>Yeshwantrao Chavan College of Engineering</td>
                                <td><button className="button1_RO">View</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <h2 className='h2_RO'>Activity Reports</h2>
                <span className='line_RO'></span><br/>

                <div className='table_RO'>
                    <table>
                        <thead>
                            <tr className='color_RO'>
                                <th>Sr.No.</th>
                                <th>RO</th>
                                <th>Status</th>
                                <th>Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='t1_RO'>
                                <td>1</td>
                                <td>Quarter 1</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button  className="button1_RO">Upload Report </button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>2</td>
                                <td>Quarter 2</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">Upload Report</button></td>
                            </tr>

                            <tr className='t1_RO'>
                                <td>3</td>
                                <td>Quarter 3</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO">Upload Report</button></td>
                            </tr>

                            <tr className='t2_RO'>
                                <td>4</td>
                                <td>Quarter 4</td>
                                <td style={{ fontWeight: 'bold' }}>Approved</td>
                                <td><button className="button1_RO"> Upload Report </button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="Footer">
            <section class="footer">

               <div class="box-container">

                  <div class="box">
                     <h3>Quick Links</h3>
                     <a href="home.php"> <i class="fas fa-angle-right"></i> home</a>
                     <a href="about.php"> <i class="fas fa-angle-right"></i> about</a>
                     <a href="scholarship.php"> <i class="fas fa-angle-right"></i> scholarship</a>
                     <a href="feedback.php"> <i class="fas fa-angle-right"></i> feedback</a>
                  </div>


                  <div class="box">
                     <h3>Contact Info</h3>
                     <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                     <a href="#"> <i class="fas fa-phone"></i> +91 11 2337 9638 </a>
                     <a href="#"> <i class="fas fa-envelope"></i> po-egit[at]iccr[dot]gov[dot]in </a>
                     <a href="#"> <i class="fas fa-map"></i> mumbai, india - 400104 </a>
                  </div>

                  <div class="box">
                     <h3>follow us</h3>
                     <a href="#"> <FontAwesomeIcon icon="fa-solid fa-person" />facebook </a>
                     <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                     <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                     <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                  </div>
               </div>
            </section>
         </div>


            </div>
        </>
    )
}

export default ROs
