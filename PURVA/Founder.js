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
import founder from './founder.jpg';

export default function Founder () {



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
            <h2>Founder</h2>
            <img id="founder" src={founder} alt="Logo"/>
           <p>Maulana Abul Kalam Muhiyuddin Ahmed (11 November 1888 – 22 February 1958) was one of the foremost leaders of the Indian freedom struggle. He was also a great scholar and poet. He was appointed as independent India's first Minister for Education and inducted in the Constituent Assembly to draft India's Constitution. Under Maulana Azad's tenure, a number of measures were undertaken to promote primary and secondary education, scientific education, the establishment of universities and the promotion of avenues of research and higher studies. The Maulana established many institutions such as the Sahitya Akademi, the Sangeet Natak Akademi, the Lalit Kala Akademi, and the Indian Council for Cultural Relations, and also provided a major stimulus for the setting up of the Indian Institutes of Technology. Maulana Azad death was a loss deeply felt in the country. Pandit Jawaharlal Nehru, paying tribute to the Maulana in Parliament, said, “We have had great men and we will have great men, but the peculiar and special kind of greatness that Maulana Azad represented is not likely to be reproduced in India or anywhere else.”
          <br /> <br /><span> Azad is remembered as amongst the leading Indian nationalists of his time. He remains one of the most inspiring symbols of communal harmony in modern India. His work for education and social upliftment in India made him an important influence in guiding India's economic and social development. For his invaluable contribution to the nation, Maulana Abul Kalam Azad was posthumously awarded India's highest civilian honor, the Bharat Ratna, in 1992. <br /><br />
          "I am a Muslim and profoundly conscious of that fact that I have inherited Islam's glorious tradition of the last thirteen hundred years. I am not prepared to lose even a small part of that legacy. The history and teachings of Islam, its art and letters, its culture and civilization are part of my wealth and it is my duty to cherish and guard them... But, with all these feelings, I have another equally deep realization born out of my life's experience, which is strengthened and not hindered by the Islamic spirit. I am equally proud of the fact that I am an Indian, an essential part of the indivisible unity of Indian nationhood, a vital factor in its total makeup, without which this noble edifice will remain incomplete. I am an essential element, which has gone to build India. I can never surrender this claim." --- Maulana Abul Kalam Azad.</span> </p>
          
          
          
          
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