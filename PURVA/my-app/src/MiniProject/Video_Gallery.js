import { NavLink } from 'react-router-dom'
import React from 'react'
import './dashboard.css';
import './Firstpage.css';
import './Scholarship.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iccr from './iccr.jpg';
import iccr_logo from './iccr_logo.png';
import aazadi from './aazadi.png';
import chasma from './chasma.png';

export default function Scholarship () {



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
         <div id="first">
            <div className="nav-links">
            
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>About Us</NavLink>
            <NavLink to='/'>Scholarship</NavLink>
            <NavLink to='/'>Gallery</NavLink>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>Feedback</NavLink>
            </div>
            </div>
            
        
    <div className="Gallery">
        
    </div>
    <section className="footer">

<div class="box-container">

   <div className="box">
      <h3>Quick Links</h3>
      <a href="home.php"> <i class="fas fa-angle-right"></i> home</a>
      <a href="about.php"> <i class="fas fa-angle-right"></i> about</a>
      <a href="scholarship.php"> <i class="fas fa-angle-right"></i> scholarship</a>
      <a href="feedback.php"> <i class="fas fa-angle-right"></i> feedback</a>
   </div>

   <div className="box">
      <h3>Extra Links</h3>
      <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
      <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
      <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
      <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
   </div>

   <div className="box">
      <h3>Contact Info</h3>
      <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
      <a href="#"> <i class="fas fa-phone"></i> +91 11 2337 9638 </a>
      <a href="#"> <i class="fas fa-envelope"></i> po-egit[at]iccr[dot]gov[dot]in </a>
      <a href="#"> <i class="fas fa-map"></i> mumbai, india - 400104 </a>
   </div>

   <div className="box">
      <h3>follow us</h3>
      <a href="#"> <FontAwesomeIcon icon="fa-solid fa-person" />facebook </a>
      <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
      <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
      <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
   </div>

</div>

<div className="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

</section> 
    

      </>
   )
}