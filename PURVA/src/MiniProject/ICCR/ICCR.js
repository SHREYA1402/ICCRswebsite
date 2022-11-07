import { NavLink } from 'react-router-dom'
import React from 'react'
import './dashboard.css';
import './Firstpage.css';
import './President.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faperson } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import iccr from './iccr.jpg';
import iccr_logo from './iccr_logo.png';
import aazadi from './aazadi.png';
import chasma from './chasma.png';
import IMG_4 from './img/IMG_4.jpg';

export default function ICCR () {



   function openNav() {
      document.getElementById("mySidenav").style.width = "20%";
   }

   function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
   }

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
         <div id="main">
     
     <img id="slideimage" src={img/IMG_4}alt="Logo"/>
     </div>

     <div class="info">
    <h1>About ICCR</h1>
    <p>
        • The Indian Council for Cultural Relations (ICCR), is an autonomous organisation of the Government of India.<br/>

        • It was founded on 9 April 1950 by Maulana Abul Kalam Azad.<br/>

        • ICCR is involved in India’s external cultural relations or cultural diplomacy, through cultural exchange with other countries and their peoples. It works to strengthen cultural relations and promote mutual understandings.<br/>
        • Registered as a Society under the Societies Act, ICCR operates as an independent body under the administrative control of the Ministry of External Affairs.<br/>
        • Dr. Vinay Sahasrabuddhe (MP Rajya Sabha) serves as the president of ICCR. <br/>
        • The ICCR Headquarters are situated in Azad Bhavan, I.P. Estate, New Delhi. Its activities within the country are handled by their 19 regional offices they are – Ahmedabad, Bengaluru, Bhopal, Bhubaneshwar, Chandigarh, Chennai, Goa, Guwahati, Hyderabad, Jaipur, Jammu, Kolkata, Lucknow, Mumbai, Patna, Pune, Shillong, Thiruvananthapuram and Varanasi.<br/>
        • ICCR has institutionalised their cooperation with state governments and has signed memorandum of understanding with 17 state governments. The states which have signed MoU with ICCR are – Andaman & Nicobar Islands, Assam, Bihar, Chandigarh, Dadra & Nagar Haveli, Daman & Diu, Haryana, Himachal Pradesh, Karnataka, Kerala, Meghalaya, North Eastern Council, Odisha, Puducherry, Punjab, Telangana and Rajasthan Jaipur Citizen Forum. <br />

        • The Council’s activities are overseen by its three statutory bodies – General Assembly, Governing Body and Finance Committee. <br/>
        • ICCR operates through a global network of cultural centres and India’s Diplomatic Missions and Post’s abroad.<br/>
        • Currently, there are 37 Indian Cultural Centres all over the world which work closely with the Indian Embassy and are headed by directors.<br/>
        ICCR operates through a global network of cultural centres and India’s Diplomatic Missions and Post’s abroad.<br/>
        • Currently, there are 37 Indian Cultural Centres all over the world which work closely with the Indian Embassy and are headed by directors.<br/>
        </p>
   
    </div><br/><br/>

    <div class="news">
        <h1>Latest News</h1>
    </div><br/><br/>

    
    <button class="button1">REPORTS</button>


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
         <h3>Extra Links</h3>
         <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
         <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
         <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
         <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
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

   <div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

</section>

        {/* <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="final map" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=bdc025a917b24f6995ce12124290ed38&extent=71.3872,6.2832,82.8789,12.2118&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"></iframe></div> */}
      </>
   )
}