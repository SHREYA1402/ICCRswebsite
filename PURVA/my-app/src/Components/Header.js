import React from 'react'
import './Header.css';
// import img1 from 'aazadi.png'
export default function Header() {
  return (
        <>
        function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show")
    }
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
   <link rel="stylesheet" href="head-menu.css"></link>
        <div>
      <img id={"img1"} src="myasimg.png" alt="NONE"/>
      <img id={"img2"} src="aazadi.png" alt="NONE"/>
      <img id={"img3"} src="chasma.png" alt="NONE"/>
       </div>
   <div id="first">
      <h3>Government of Maharashtra</h3>
   </div>
   <input type="checkbox" id="check"/>
   <label htmlFor="check">
      <i className="fa fa-bars" id="btn"></i>
      <i className="fa fa-times" id="cancel"></i>
   </label>
   <div className="sidebar">
      <h2>Profile</h2>
      <ul>
         <li><a href="/"><i className="fa fa-qrcode"></i>HOME</a></li>
         <li><a href="/"><i className="fa fa-question-circle"></i>ACHIEVEMENTS</a></li>
         <li><a href="/"><i className="fa fa-qrcode"></i>DASHBOARD</a></li>
         <li><a href="/"><i className="fa fa-question-circle"></i>ANNOUNCEMENT</a></li>
         <li><a href="/"><i className="fa fa-envelope"></i>CONTACT</a></li>
         <li><a href="/"><i className="fa fa-times"></i>LOG OUT</a></li>
      </ul>
   </div>
   <div className="dropdown">
        <button onclick="myFunction()" className="dropbtn">Country</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#au">Austria</a>
          <a href="#bang">Bangladesh </a>
          <a href="#bel">Belgium</a>
          <a href="#ind">India</a>
          <a href="#jp">Japan</a>
        </div>
      </div>
      <div className="dropdown">
        <button onclick="myFunction()" className="dropbtn">State</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#AP">Andhra Pradesh</a>
          <a href="#ArP">Arunachal Pradesh </a>
          <a href="#assam">Assam</a>
          <a href="#bihar">Bihar</a>
          <a href="#MH">Maharashtra</a>
        </div>
      </div>
      <div className="dropdown">
      <button onclick="myFunction()" className="dropbtn">City</button>
      <div id="myDropdown" className="dropdown-content">
        <a href="/ch">Chennai</a>
        <a href="/kol">Kolkata</a>
        <a href="/mum">Mumbai</a>
        <a href="/del">New Delhi</a>
        <a href="/pune">Pune</a>
      </div>
    </div>
        </>
  )
}
