import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
  MDBFooter,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css"
import "./Slide.css"
import Bajaj from './Bajaj.png'
import Profile from './Profile.png'
export default function HomePage() {

  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
     <div className="logo">
            <img src={Bajaj} alt="img1" />
          </div>
        {/*............. Hamburger.............. */}
          <div className="hamburger">
      <section className='mb-3'>
        <MDBNavbar dark bgColor='info'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='third-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated3(!showAnimated3)}
            >
              <div className={`animated-icon3 ${showAnimated3 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated3}>
          <div className='bg-light shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              My Profile
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Certificates
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              My Performance
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              Contact
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
      </div>
      {/* ........... Navbar ........... */}
      <div id="first">
            <div className="nav-links">
             <ul>
             <NavLink to='/'>Home </NavLink>
            <NavLink to='/iccr'>ICCR'S Activities </NavLink>
            <NavLink to='/regional'>Regional Office's Activities</NavLink>
            <NavLink to='/'>Self-Driven Activities</NavLink>
            </ul>
            </div>
            </div>

    <div className="logo">
            <img src={Profile} alt="img1" />
          </div>
{/*................ Footer........... */}
    <MDBFooter className=' text-center text-white' style={{ backgroundColor: 'rgb(11, 11, 57)' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
        iic.mic.gov.in
        </a>
      </div>
    </MDBFooter>
    </>
  );
}
