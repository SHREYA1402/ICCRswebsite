// import React from 'react'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, Route, Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Home }from "./Components/ReactRouter/Home";
// import { About }from "./Components/ReactRouter/About";
// import { Submit } from "./Components/ReactRouter/Submit";
// import { Navbar }from "./Components/ReactRouter/Navbar";
// import { Feature }from "./Components/ReactRouter/Feature";
// import { New }from "./Components/ReactRouter/New";
// import { Products }from "./Components/ReactRouter/Products";
// import FileUpload from "./Upload/FileUpload"
// import DemoForm from "./Components/DemoForm";
// import ClubEnrollment from "./Components/ClubEnrollment";
// import { Eventdashboard } from "./Dashbords-event-club/Eventdashboard.js";
// import { Myprofile } from "./Dashbords-event-club/Myprofile.js";
// import MYprofileUI from "./Dashbords-event-club/MYprofileUI";
//  import Registration from "./Components/Registration";
// import Registration_UI from "./Components/Registration_UI";
// import ICCR from "./MiniProject/ICCR";
// import ContactUs from "./MiniProject/ContactUs";
//  import FrontPage from "./MiniProject/FrontPage";
//  import Scholarship from "./MiniProject/Scholarship";

//  import Institute from "./MiniProject/Institute/Institute";
//  import Signin from "./MiniProject/Institute/Signin";
import HomePage from "./MiniProject/Institute/HomePage";
// import Example from "./MiniProject/ICCR/Example";
//  import President from "./MiniProject/President";
//  import Founder from "./MiniProject/Founder";
function App() {
  return (
    //   <div>
    //   <Router basename="/">
    //    {/* Add Menu Component */}
    //     <FrontPage />
    //     <Switch> 

    //       <Route path="/Founder" component={Founder}/>
    //       <Route path="/President" component={President}/>

    //     </Switch>
    //   </Router>
    // </div>
    // <ClubEnrollment/>
    // <ICCR/>
    //  <FrontPage/>
    // <President/>
    // <Founder/>
    //  <FileUpload/>
    //  <DemoForm/>
    // <ContactUs/> 
    //  <Registration_UI/>
    //  <MYprofileUI/>
    // <Registration/>
    //  <Eventdashboard/>

    // <Scholarship/> 
    <>
      {/* <Institute/> */}
      <HomePage />
      {/* <Routes>

   <Route path='/' element={ <FrontPage/>}/>
     <Route path='contact' element={<ContactUs/>}/>
     <Route path='scholarship' element={<Scholarship/>}/>
   <Route path='ICCR' element={<ICCR/>}/>
  
   </Routes> */}

    </>

  );
}

export default App;