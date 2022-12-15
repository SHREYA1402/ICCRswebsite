import React from 'react'
import './style_ICCR.css';
import './Table.css';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import iccr_logo from './my_components/img';
// import aazadi from './my_components/img';
// import chasma from './my_components/img';
// import iccr1 from './my_components/img';



export default function ICCR() {

    return (
        <div>
            <>

             {/* <div className="head">
            <div>
               <img id="img1" src={iccr_logo} alt="" />
               <img id="img2" src={aazadi} alt="Logo" />
               <img id="img3" src={chasma} alt="Logo" />
               <img id="img4" src={iccr1} alt="Logo" />
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
         </div>  */}



                <div className="info">
                    <h1>About ICCR</h1><br />
                    <p>
                        • The Indian Council for Cultural Relations (ICCR), is an autonomous organisation of the Government of India.<br />

                        • It was founded on 9 April 1950 by Maulana Abul Kalam Azad.<br />

                        • ICCR is involved in India’s external cultural relations or cultural diplomacy, through cultural exchange with other countries and their peoples. It works to strengthen cultural relations and promote mutual understandings.<br />
                        • Registered as a Society under the Societies Act, ICCR operates as an independent body under the administrative control of the Ministry of External Affairs.<br />
                        • Dr. Vinay Sahasrabuddhe (MP Rajya Sabha) serves as the president of ICCR. <br />
                        • The ICCR Headquarters are situated in Azad Bhavan, I.P. Estate, New Delhi. Its activities within the country are handled by their 19 regional offices they are – Ahmedabad, Bengaluru, Bhopal, Bhubaneshwar, Chandigarh, Chennai, Goa, Guwahati, Hyderabad, Jaipur, Jammu, Kolkata, Lucknow, Mumbai, Patna, Pune, Shillong, Thiruvananthapuram and Varanasi.<br />
                        • ICCR has institutionalised their cooperation with state governments and has signed memorandum of understanding with 17 state governments. The states which have signed MoU with ICCR are – Andaman & Nicobar Islands, Assam, Bihar, Chandigarh, Dadra & Nagar Haveli, Daman & Diu, Haryana, Himachal Pradesh, Karnataka, Kerala, Meghalaya, North Eastern Council, Odisha, Puducherry, Punjab, Telangana and Rajasthan Jaipur Citizen Forum. <br />

                        • The Council’s activities are overseen by its three statutory bodies – General Assembly, Governing Body and Finance Committee. <br />
                        • ICCR operates through a global network of cultural centres and India’s Diplomatic Missions and Post’s abroad.<br />
                        • Currently, there are 37 Indian Cultural Centres all over the world which work closely with the Indian Embassy and are headed by directors.<br />
                        ICCR operates through a global network of cultural centres and India’s Diplomatic Missions and Post’s abroad.<br />
                        • Currently, there are 37 Indian Cultural Centres all over the world which work closely with the Indian Embassy and are headed by directors.<br />
                    </p>

                </div><br /><br />

                <div className='container'>

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

                    <div className="map">
                        <h1>MAP</h1>
                        {/* <div class="embed-container">
                  

<div class="embed-container">
<small>
<a to="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=4606effde1f54489a902ccc786770aeb&extent=64.3331,5.4774,116.1446,31.9831&home=true&zoom=true&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br/><iframe width="500" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="mini project" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=4606effde1f54489a902ccc786770aeb&extent=64.3331,5.4774,116.1446,31.9831&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light"></iframe>
</div>
                    </div> */}

                    </div>

                </div>

                <br /><br /><div className='table_ICCR'>
                    <table>
                        <thead>
                            <tr style={{backgroundColor: 'royalblue'}}>
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
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>2</td>
                                <td>Ahmedabad</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>3</td>
                                <td>Bengaluru</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>4</td>
                                <td>Guwahati</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>5</td>
                                <td>Jammu</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>6</td>
                                <td>Kolkata</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>7</td>
                                <td>Lucknow</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>8</td>
                                <td>Mumbai</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>9</td>
                                <td>Patna</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t2'>
                                <td>10</td>
                                <td>Pune</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>

                            <tr className='t1'>
                                <td>11</td>
                                <td>Shillong</td>
                                <td style={{fontWeight :'bold'}}>Approved</td>
                                <td><button className="button1">View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </>
        </div>
    )
}

