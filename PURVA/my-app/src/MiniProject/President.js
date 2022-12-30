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
import Pres from './Pres.jpg';

export default function President () {



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
            <div id="first">
            <div className="nav-links">
            
            <NavLink to='/'>Home</NavLink>
            <div className="dropdown">
            <button className="about">About us
            <i class="fa fa-caret-down"></i>
            </button>
            <div className="about-content">
            <NavLink to='/'>The President</NavLink>
            <NavLink to='/'>The Founder</NavLink>
            </div>
            </div>
            <NavLink to='/'>Scholarship</NavLink>
            <NavLink to='/'>Gallery</NavLink>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>Feedback</NavLink>
            
    </div>
            </div>
         </div>





        <div className="Heading">
            <h2>President</h2>
            <img id="president" src={Pres} alt="Logo"/>
           <p>Dr. Vinay Sahasrabuddhe is a nationalist social worker at heart, a researcher cum student of political science and a trainer in democracy by profession and a former Parliamentarian by elevation! Dr. Sahasrabuddhe is a post-Graduate in English Literature and a PhD in Political Science, both from the University of Mumbai. Since January 2018, Dr. Sahasrabuddhe is the President of Indian Council for Cultural Relations (ICCR).
          <br /> <br /> He has been the Member of Parliament, Rajya Sabha (Upper House of Indian Parliament) from July 2016 to July 2022. Also, he has served as the Chairman of the Parliamentary Standing Committee on Education, Women, Children, and Youth & Sports.
          <br /> <br />During 2014-2020, Dr. Sahasrabuddhe was the National Vice President of the Bharatiya Janata Party (BJP), India’s principal ruling Party. Besides, Dr. Sahasrabuddhe is founding Director General and Vice President of Rambhau Mhalgi Prabodhini (RMP), a unique institution for honing leadership skills through training and orientation. <br /><br />
          In the past, Dr. Sahasrabuddhe has worked on the Management Council of the University of Mumbai. Between 2012-15, he was also the Vice President of 208 years old Asiatic Society of Mumbai. Dr. Sahasrabuddhe has authored or edited about over half a dozen books in Marathi and English, couple of which have received distinguished awards. </p>
          
          
          
          
        </div>
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