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
            
          <div className="scholar">
            <h1>SCHOLARSHIP</h1>
            </div><br/><br/>

<p class="p1">India is well known as an education hub attracting international students from all over the world. India’s robust education system, in the backdrop of its rich diversity and vibrant culture &history, affords a broad range of options for students. And as a rapidly growing country with a leading technological edge, studying in India has much to offer, whether it is Engineering, Computers, Arts, Philosophy, Political Sciences or Classics etc.<br/><br/>

    Indian Council for Cultural Relations administers various scholarship programs annually and awards about 3000+ scholarships under 21 different schemes to foreign students from about 180 countries. Amongst these 21 schemes, six are funded by ICCR from its grant and others are administered on behalf of MEA and Ministry of Ayush. The courses offered for studies are for Under-graduation, Post-graduation and Ph.D. levels. Each academic year, ICCR has about 6000+ of its foreign scholars who are studying at various Central/State Universities, Institutes, NITs, and Agricultural Institutions etc.<br/><br/><br/>

    In a step forward towards “Digital India” ICCR developed the “Admissions to Alumni (A2A) Portal) to streamline the enrolment process. The portal was launched on January 17, 2018 by then Honorable External Affairs Minister Late Smt. Sushma Swaraj. With the introduction of the portal from the academic year 2018-19 onwards, ICCR Scholarship programs are not only digitized but also have become an effortless exercise. The portal contains all relevant information regarding ICCR sponsored scholarship schemes and other information like names of the Indian Universities, courses offered by them and guidelines of scholarship schemes etc.<br/><br/><br/>

    Detailed guidelines on the process of applying for ICCR Scholarships are available on
    <NavLink to="http://a2ascholarships.iccr.gov.in/">http://a2ascholarships.iccr.gov.in/</NavLink> <br />
     {/* <a href="http://a2ascholarships.iccr.gov.in/">http://a2ascholarships.iccr.gov.in/</a> <br/> */}
</p>
<NavLink to="https://iccr.gov.in/index.php/iccr-scholarship/indian-council-cultural-relations-scholarship"></NavLink>
<button class="button1">pdf link</button>
{/* <a href="https://iccr.gov.in/index.php/iccr-scholarship/indian-council-cultural-relations-scholarship">

</a> */}

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