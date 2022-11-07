import { NavLink } from 'react-router-dom'
import React from 'react'
import './dashboard.css';
import './Firstpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faperson } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
////////
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import {NavLink, Link } from "react-router-dom";
// import Dropdown from './Dropdown';
////////
import iccr from './iccr.jpg';
import iccr_logo from './iccr_logo.png';
import aazadi from './aazadi.png';
import chasma from './chasma.png';
import profilepic from './profilepic.png';
import main_img from './main_img.jpg';
import head from './head.png';
import office from './office.png';
import institute from './institute.png';
import stud from './stud.png';
export default function FrontPage () {



   function openNav() {
      document.getElementById("mySidenav").style.width = "20%";
   }

   function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
   }


// //////////
//    const [isMenu, setisMenu] = useState(false);
//    const [isResponsiveclose, setResponsiveclose] = useState(false);
//    const toggleClass = () => {
//      setisMenu(isMenu === false ? true : false);
//      setResponsiveclose(isResponsiveclose === false ? true : false);
//  };
//    let boxClass = ["main-menu menu-right menuq1"];
//    if(isMenu) {
//        boxClass.push('menuq2');
//    }else{
//        boxClass.push('');
//    }
//    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//    const toggleSubmenu = () => {
//      setMenuSubMenu(isMenuSubMenu === false ? true : false);
//    };
//    let boxClassSubMenu = ["sub__menus"];
//    if(isMenuSubMenu) {
//        boxClassSubMenu.push('sub__menus__Active');
//    }else {
//        boxClassSubMenu.push('');
//    }

///////////

   return (
      <>
     
         <div className="head">
            <div>
               <img id="img1" src={iccr_logo} alt="" />
               <img id="img2" src={aazadi} alt="Logo" />
               <img id="img3" src={chasma} alt="Logo" />
               <img id="img4" src={iccr} alt="Logo" />
            </div>

            {/* //////////////// */}


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
            

         {/* /////////////////// */}
            {/* <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {/* {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Founder`}> Founder </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/President`}> President </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   */}
            {/* ////////////////////// */}

         
            {/* <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select> */}
 {/* return()
 <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li> */}

    

         <div>
            <nav>
               <div id="mySidenav" className="sidenav">
                  <img id="imgpic" src={profilepic} alt="Logo" />
                  <NavLink to='myprofile'>MY PROFILE</NavLink>
                  {/* <a href="#">MY PROFILE</a> */}
                  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                  <NavLink to='/'>CONTACT</NavLink>
                  <NavLink to='/'>LOG OUT</NavLink>
                  {/* <a href="#">CONTACT</a>
               <a href="#">LOG OUT</a> */}
               </div>
            </nav>
            <div>
               
               <img id="img5" src={main_img} alt="Logo" />
            </div>
            {/* <span className='icon' onClick={openNav}>&#9776;</span> */}
             
         </div>
         <div className="enroll">
         <div id="login"><span>LOGIN AS</span></div>
         <div className="box-container">
            <div className="box">
               <button className="iccr-head">
                   <img id="img6" src={head} alt="Logo" />
                   <h3>ICCR</h3>
               </button>
            </div>
            <div className="box">
               <button className="iccr-head">
                   <img id="img7" src={office} alt="Logo" />
                   <h3>Regional Office</h3>
               </button>
            </div>
            <div className="box">
               <button className="iccr-head">
                   <img id="img8" src={institute} alt="Logo" />
                   <h3>Institute</h3>
               </button>
            </div>
            <div className="box">
               <button className="iccr-head">
                   <img id="img9" src={stud} alt="Logo" />
                   <h3>Student</h3>
               </button>
            </div>
         </div>
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

   <div class="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>

</section>
{/* <Dropdown/> */}
        {/* <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="final map" src="//ashwinimap.maps.arcgis.com/apps/Embed/index.html?webmap=bdc025a917b24f6995ce12124290ed38&extent=71.3872,6.2832,82.8789,12.2118&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light"></iframe></div> */}
      </>
   )
}
