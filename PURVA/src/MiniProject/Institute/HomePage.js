import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HomePage.css"
import Bajaj from './Bajaj.png'
export default function HomePage() {

  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
     <div className="logo">
            <img src={Bajaj} alt="img1" />
          </div>
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

      {/* <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://admission24-static-data.nyc3.cdn.digitaloceanspaces.com/api_main/public/images/basic-info/1559966187-banner.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel> */}
     <MDBCarousel showControls fade>
      <MDBCarouselItem style={{innerHeigh:'23px'}}
        className='w-100 d-block'
        itemId={1}
        src='https://www.ashishbhonde.com/img/bajaj-inst/9.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.ashishbhonde.com/img/bajaj-inst/13.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.ashishbhonde.com/img/bajaj-inst/17.jpg'
        alt='...'
      />
    </MDBCarousel>
    </>
  );
}


