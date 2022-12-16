import { NavLink } from 'react-router-dom'
import React from 'react'
import './dashboard.css';
import './Firstpage.css';
import './President.css';
import './ICCR.css';

import {
   MDBCarousel,
   MDBCarouselItem,
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iccr from './iccr.jpg';
import iccr_logo from './iccr_logo.png';
import aazadi from './aazadi.png';
import chasma from './chasma.png';
import IMG_4 from './IMG_4.jpg';
export default function ICCR() {



   function openNav() {
      document.getElementById("mySidenav").style.width = "20%";
   }

   function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
   }


   // function first(){
   //    document.getElementById("slideimage").src="IMG_5.jpg";
   // }
   // function second(){
   //    document.getElementById("slideimage").src="IMG_6.jpg";
   // }
   // function third(){
   //    document.getElementById("slideimage").src="IMG_7.jpg";
   // }
   // function fourth(){
   //    document.getElementById("slideimage").src="IMG_4.jpg";
   // }

   // setInterval(first,4000);
   // setInterval(second,8000);
   // setInterval(third,12000);
   // setInterval(fourth,16000);
   return (
      <>
         <div className="head">
            <div>
               <img id="img1" src={iccr_logo} alt="" />
               <img id="img2" src={aazadi} alt="Logo" />
               <img id="img3" src={chasma} alt="Logo" />
               <img id="img4" src={iccr} alt="Logo" />
            </div>

         </div>

         <div id="first">
            <div className="nav-link1">
               <ul>
                  <NavLink to='/'>Home </NavLink>
                  <NavLink to='Institute'>ICCR'S Activities </NavLink>
                  <NavLink to='/regional'>Regional Office's Activities</NavLink>
                  <NavLink to='/'>Self-Driven Activities</NavLink>
               </ul>
            </div>
         </div>
         <MDBCarousel showControls fade>
            <MDBCarouselItem style={{ innerHeigh: '23px' }}
               className='w-100 d-block'
               itemId={1}
               src='https://iccr.gov.in/sites/default/files/2022-11/Banner.jpg'
               alt='...'
            />
            <MDBCarouselItem
               className='w-100 d-block'
               itemId={2}
               src='https://iccr.gov.in/sites/default/files/2022-09/IMG_2130.JPG'
               alt='...'
            />
            <MDBCarouselItem
               className='w-100 d-block'
               itemId={3}
               src='https://iccr.gov.in/sites/default/files/2022-10/66c733e6-9e75-4fc8-905d-d5040a96eeee.jpg'
               alt='...'
            />
         </MDBCarousel>

         {/* <div id="main">
             <img id="slideimage" src={IMG_4}alt="Logo"/>
         </div> */}

         <div class="info">
            <h1>About ICCR</h1>
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

               {/* <style>.embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><small><a href="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=4606effde1f54489a902ccc786770aeb&extent=64.3331,5.4774,116.1446,31.9831&home=true&zoom=true&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light" style="color:#0000FF;text-align:left" target="_blank">View larger map</a></small><br/><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="mini project" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=4606effde1f54489a902ccc786770aeb&extent=64.3331,5.4774,116.1446,31.9831&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light"></iframe></div> */}
               {/* <div class="embed-container"><iframe  width="500" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="final map" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=bdc025a917b24f6995ce12124290ed38&extent=71.3872,6.2832,82.8789,12.2118&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"></iframe></div> */}
              
               <div class="embed-container"><iframe width="700" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="final map" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=4606effde1f54489a902ccc786770aeb&extent=64.3331,5.4774,116.1446,31.9831&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light"></iframe></div>
            
           
           
         <br /><br />
         <div className='table_ICCR' style={{ backgroundColor: '#E9EBF5', width: "100%" }}>
            <table>
               <thead>
                  <tr style={{ backgroundColor: 'royalblue' }}>
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


         {/* <NavLink to="https://iccr.gov.in/annual-reports"></NavLink>
    <button className="button1">REPORTS</button> */}
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

                  {/* <div class="box">
      <h3>Extra Links</h3>
      <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
      <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
      <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
      <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
   </div> */}

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



      </>
   )
}