import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Student.css';
// import './ContactUs.css';
const IMG_3 = new URL("./img/IMG_3.jpg", import.meta.url)
const IMG_6 = new URL("./img/IMG_6.jpg", import.meta.url)
const IMG_7 = new URL("./img/IMG_7.jpg", import.meta.url)
const IMG_8 = new URL("./img/IMG_8.jpg", import.meta.url)
const IMG_11 = new URL("./IMG_11.jpg", import.meta.url)

export default function Student() {
  const navigate = useNavigate()
  return (
    <div>
       <div className="h1_student"><h1>Scholarship Details </h1></div>
      <span className='line_Student'></span><br/>

      <div className='container_student1'>
      <div className='Details_student'>
     
        Indian Council for Cultural Relations administers various scholarship programs annually and awards about 3000+ scholarships under 21 different schemes to foreign students from about 180 countries.
         Amongst these 21 schemes, six are funded by ICCR from its grant and others are administered on behalf of MEA and Ministry of Ayush. The courses offered for studies are for Under-graduation, Post-graduation
          and Ph.D. levels. Each academic year, ICCR has about 6000+ of its foreign scholars who are studying at various Central/State Universities, Institutes, NITs, and Agricultural Institutions etc.<br/><br/>

        In a step forward towards “Digital India” ICCR developed the “Admissions to Alumni (A2A) Portal) to streamline the enrolment process. The portal was launched on January 17, 2018 by then Honorable
         External Affairs Minister Late Smt. Sushma Swaraj. With the introduction of the portal from the academic year 2018-19 onwards, ICCR Scholarship programs are not only digitized but also have become an
          effortless exercise. The portal contains all relevant information regarding ICCR sponsored scholarship schemes and other information like names of the Indian Universities, courses offered by them and guidelines of scholarship schemes etc.<br/><br/>
    
      </div>
      <img className='photo_student' src={IMG_11} alt="" /><br/>
      </div><br/>

      
      <div className="container11_student"> 
        {/* <div className="h2_student"><h1>Events conducted</h1></div> */}
      {/* <span className='line_Student'></span><br/>  */}

      <div className="container1_student">
            
            <img className='img_right_student' src={IMG_3} alt="" />
            <p class="right_student">
            SVCC organized a "Khon Dance Performance '' by Mr. Ekkalak Nguyen, Bharatnatyam Artist
             & ICCR Scholar, at the Inaugural Ceremony of the Diwali Festival at Saphan Lek, 
             Phauraat, Bangkok.
                
            </p> 
    </div>

    <div className="container2_student">
        
        <p class="left_student">
        E-Invite : ICCR Horizon Series Programme, Saturday, 14 May 2022 at 5pm, 
        Bhanja Kala Mandap, Bhubaneswar
        </p> 
        <img className="img_left_student" src={IMG_6}alt="" /> 
    </div>

    <div className="container1_student">
            {/* <img className="img11" src={IMG_4}alt="Logo" />  */}
            <img className='img_right_student' src={IMG_7} alt="" />
            <p class="right_student">
            International Arts & Cultural Foundation, Bangalore in collaboration 
            with Indian Council for Cultural Relations 
            </p> 
    </div>

    <div className="container2_student">
        
        <p class="left_student">
         ICCR Horizon Series Programme, Saturday, 19 April 2022 at 5pm, 
         Dadar Matunga Cultural Centre, Mumbai
        </p> 
        <img className="img_left_student" src={IMG_8}alt="" /> 
    </div>
      </div>

       <div className='button_of_student'>
      <button className="button_student" onClick={() => navigate('/Feedback')} >Feedback form</button>
      </div>

    </div>
  )
}
