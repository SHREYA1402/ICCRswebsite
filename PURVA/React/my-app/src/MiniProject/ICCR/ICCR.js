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
import IMG_4 from './img/IMG_4.jpg';

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
         
         </div>


        {/* <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="final map" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=bdc025a917b24f6995ce12124290ed38&extent=71.3872,6.2832,82.8789,12.2118&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"></iframe></div> */}
      </>
   )
}