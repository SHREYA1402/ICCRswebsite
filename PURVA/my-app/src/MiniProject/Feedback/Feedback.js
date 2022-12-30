// import React from 'react'
// import './EventOrganizer.css';
// import {useState} from 'react'



// // function EventOrganizer(props) {
// //     const [allvalues,setAllvalues] =useState([{
// //         nappli:"",
// //         norgan:"",
// //         pin:"",
// //         address:"",
// //         email:"",
// //         phoneno:"",
// //         date:"",
// //         ftime:"",
// //         ttime:"",
// //         purpose:"",
// //         otherinformation:"",
// //     }])
    
// //     const objvalue = [...allvalues]

// //     const changeHandler = (e) =>
// //     {
// //         setAllvalues({...allvalues,value:e.target.value});
// //     }
// // }

// export default function feedback() {
//   return (
//     <div>
//       <div className="box">
//             <div className="container"  >
//                 <h1 >APPLICATION FOR EVENT ORGANISER</h1><br/>
//                 <hr/>
//         <form onSubmit={submitHandler} >
                
//                 <div >

//                 <label htmlFor="email"><b>Name of Applicant</b>
//                 <input  type="text" value={allvalues.nappli} onChange={changeHandler} id="nappli" name="nappli" required/><br/><br/>
//                 </label>
//                 <label htmlFor="email"><b>Name of Organization</b>
//                 <input  type="text" value={allvalues.norgan} onChange={changeHandler} id="norgan" name="norgan" required/><br/><br/>
//                 </label>

//                 <label htmlFor="email"><b>District Pincode</b></label>
//                 <input  type="text" value={allvalues.pin} onChange={changeHandler} id="pin" name="pin" required/><br/><br/>

      
//                 <label htmlFor="email"><b>Address</b>
//                 <input  type="text" value={allvalues.address} onChange={changeHandler} id="address" name="address"  required/><br/><br/>
//                 <input  type="text" value={allvalues.address} onChange={changeHandler} id="anaaddressme" name="address"  required/><br/><br/>
//                 </label>
//                 <label htmlFor="email"><b>Email</b>
//                 <input  type="text" value={allvalues.email} onChange={changeHandler} id="email" name="email"  required/><br/><br/>

//                 <label htmlFor="psw"><b>Phone No.</b></label>
//                 <input  type="text" value={allvalues.phoneno} onChange={changeHandler} id="phoneno" name="phoneno" required/><br/><br/>
//                 </label>
//                 <label htmlFor="psw"><b>Date</b></label>
//                 <input  type="text" value={allvalues.date} onChange={changeHandler} id="date" name="date" required/><br/><br/>

//                 <div className="time">
//                 <label htmlFor="confirm-psw"><b>Time</b></label>
//                 <span><b>From</b></span><input type="text1" value={allvalues.time} onChange={changeHandler} id="ftime" name="ftime" required/> <b>To</b><input  type="text1" value={allvalues.time} onChange={changeHandler} id="ttime" name="ttime" required/><br/> <br/>
//                 </div>

//                 <label htmlFor="email"><b>Purpose of Event</b></label>
//                 <input  type="text" value={allvalues.purpose} onChange={changeHandler} id="purpose" name="purpose" required/><br/><br/>


//                 <label htmlFor="email"><b>Other Information </b></label>
//                 <input  type="text" value={allvalues.otherinformation} onChange={changeHandler} id="otherinformation" name="otherinformation" required/><br/><br/>

//                 <hr/>
//                 <button type="submit"  className="registerbtn">Register</button>
              
              
//                 </div>
                
//     </form>
//             </div>
            


//         </div>
//     </div>
//   )
// }




import React,{useState} from 'react'
import axios from 'axios'
import './Feedback.css';

// import Form from 'react-bootstrap/Form';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
 function EventOrganizer(props) {
    const [allvalues,setAllvalues] =useState([{
        nappli:"",
        norgan:"",
        pin:"",
        address:"",
        email:"",
        phoneno:"",
        date:"",
        ftime:"",
        ttime:"",
        purpose:"",
        otherinformation:"",
    }])
    
    const objvalue = [...allvalues]

    const changeHandler = (e) =>
    {
        setAllvalues({...allvalues,value:e.target.value});
    }

    function submitHandler (e)
    {
        e.preventDefault();
        //console.log(JSON.stringify({...objvalue}, null, 2));
        //props.send({...objvalue})
        axios('http://SIH Project/Validation.php');

    }

  return (
    <>
        <div className="box">
            <div className="container_student"  >
                <h2 className='feedback_student'>FEEDBACK OF EVENT</h2><br/>
                <hr/>
        <form onSubmit={submitHandler} >

        {/* {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">} */}
                
                <div >

                <label htmlFor="email"><b>Name of Student</b>
                <input  type="text" value={allvalues.nappli} onChange={changeHandler} id="nappli" name="nappli" required/><br/><br/>
                </label>
                <label htmlFor="email"><b>Name of Institute</b>
                <input  type="text" value={allvalues.norgan} onChange={changeHandler} id="norgan" name="norgan" required/><br/><br/>
                </label>

                {/* <label htmlFor="email"><b>District Pincode</b></label>
                <input  type="text" value={allvalues.pin} onChange={changeHandler} id="pin" name="pin" required/ ><br/><br/> */}

      
                {/* <label htmlFor="email"><b>Address</b>
                <input  type="text" value={allvalues.address} onChange={changeHandler} id="address" name="address"  required/><br/><br/>
                <input  type="text" value={allvalues.address} onChange={changeHandler} id="anaaddressme" name="address"  required/><br/><br/>
                </label> */}
                <label htmlFor="email"><b>Email</b>
                <input  type="text" value={allvalues.email} onChange={changeHandler} id="email" name="email"  required/><br/><br/>

                <label htmlFor="psw"><b>Phone No.</b></label>
                <input  type="text" value={allvalues.phoneno} onChange={changeHandler} id="phoneno" name="phoneno" required/><br/><br/>
                </label><br/><br/>

                <label htmlFor="email"><b>Event's content quality</b></label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">1</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">2</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">3</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">4</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">5</label><br/><br/>

                <label htmlFor="email"><b>How informative do you find this event</b></label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">1</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">2</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">3</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">4</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">5</label><br/><br/>

                <label htmlFor="email"><b>Overall rating of event</b></label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">1</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">2</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">3</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">4</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">5</label><br/><br/>
                {/* <label htmlFor="psw"><b>Date</b></label>
                <input  type="text" value={allvalues.date} onChange={changeHandler} id="date" name="date" required/><br/><br/> */}

                {/* <div className="time">
                <label htmlFor="confirm-psw"><b>Time</b></label>
                <span><b>From</b></span><input type="text1" value={allvalues.time} onChange={changeHandler} id="ftime" name="ftime" required/> <b>To</b><input  type="text1" value={allvalues.time} onChange={changeHandler} id="ttime" name="ttime" required/><br/> <br/>
                </div> */}

                <label htmlFor="email"><b>Do you want such Events</b></label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">Yes</label>
                <input type="radio" className='radio_button' name="fav_language" value="JavaScript"/>
                <label htmlfor="javascript">No</label><br/><br/>
                
                {/* <input  type="text" value={allvalues.purpose} onChange={changeHandler} id="purpose" name="purpose" required/><br/><br/> */}


                <label htmlFor="email"><b>Any suggestions </b></label>
                <input  type="text" value={allvalues.otherinformation} onChange={changeHandler} id="otherinformation" name="otherinformation" required/><br/><br/>

                {/* <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          /> */}

                <hr/>
                <button type="submit"  className="registerbtn">Submit</button>
              
              
                </div>
                
    </form>
            </div>
            


        </div>
  
    </>
  )
}
export default EventOrganizer