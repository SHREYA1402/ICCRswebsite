import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import Bajaj from './Bajaj.png'
import './Slide.css'
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
// import { border, fontSize } from '@mui/system';
// import profilepic from './profilepic.png';

function MyVerticallyCenteredModal(props) {


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
    
}


const SelfDriven = () => {

    const [showAnimated3, setShowAnimated3] = useState(false);

    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()

function openNav() {
   document.getElementById("mySidenav").style.width = "20%";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

    return (
        <>
         

         <div className="logo">
            <img src={Bajaj} alt="img1" />
          </div>
            <br />
                {/*................ Hamburger .................*/}
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
            {/*.......... Navbar.......... */}

          <div id="first">
            <div className="nav-links">
            <NavLink to='/iccr'>Home </NavLink>
            <NavLink to='/iccr'>ICCR'S Activities </NavLink>
            <NavLink to='/regional'>Regional Office's Activities</NavLink>
            <NavLink to='/'>Self-Driven Activities</NavLink>
            </div>
            </div>
            {/*.......... Cards.......... */}
        <div className="container">       
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
        Demo Day/Exibition/Poster Preparation of Ideas/PoC & linkage with Innovation Ambassadors/Experts for Mentorship Support-Manage through YUKTI-NIR 
        </Card.Text>
        <Button variant="primary" style={{ width: '16rem'}}>
        Quarter I
      </Button>
      <br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
         Inter/Intra Institute/Idea Competition/Challange/Hackathon and Rewards Best Ideas Manage through YUKTI-NIR
        </Card.Text> <br /> 
        <Button variant="primary" style={{ width: '16rem' }}>
        Quarter II
      </Button><br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
          Exposure and field visit for problem identification <br /> <br /> <br /> <br /> <br />
        </Card.Text>
        <Button variant="primary" style={{ width: '16rem' }}>
        Quarter III
      </Button><br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>
    </div>
    <div className="container1">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
          Exposure and field visit for problem identification <br /> <br /> <br /> <br /> <br />
        </Card.Text>
        <Button variant="primary" style={{ width: '16rem' }}>
        Quarter III
      </Button><br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
          Exposure and field visit for problem identification <br /> <br /> <br /> <br /> <br />
        </Card.Text>
        <Button variant="primary" style={{ width: '16rem' }}>
        Quarter III
      </Button><br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px' }}>
          Exposure and field visit for problem identification <br /> <br /> <br /> <br /> <br />
        </Card.Text>
        <Button variant="primary" style={{ width: '16rem' }}>
        Quarter III
      </Button><br /><br />
        <Button variant="primary" style={{ width: '16rem' }} onClick={() => setModalShow(true)}>
        View Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
      </Card.Body>
    </Card>
    </div> 

        </>
         
    )
}

export default SelfDriven;