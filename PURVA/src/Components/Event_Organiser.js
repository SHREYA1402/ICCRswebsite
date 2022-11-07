// import React from 'react'

// export default function Event_Organiser() {
//   return (
//     <>
//         <form>
//         <div class="box"/>
//             <div class="container">
//                 <h1 style="font-size:25px; text-align: center;">APPLICATION FOR EVENT ORGANISER</h1><br/>
//                 <hr/>
//                 <label for="email"><b>Name of Applicant</b><label/>
//                     <i class="fa-light fa-user" id="user"></i></label>
            
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>

//                 <label for="email"><b>Name of Organization</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>
            

//                 <label for="email"><b>District Pincode</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>
   

//                 <label for="email"><b>Address</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>
          

//                 <label for="email"><b>Email</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>
 

//                 <label for="psw"><b>Phone No.</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "/><br/><br/>
      

//                 <label for="confirm-psw"><b>Time</b></label>
//                <span>From </span><input  type="text" id="lname" name="lname" value=" "/>To <input  type="text" id="oname" name="oname" value=" "/> <br/><br/>

//                 <label for="email"><b>Date</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "><br/><br/>
        
//                 <label for="email"><b>Purpose of Event</b></label>
//                 <input  type="text" id="hname" name="hname" value=" "><br/><br/>

//                 <label for="email"><b>Other Information </b></label>
//                 <input  type="text" id="hname" name="hname" value=" "><br/><br/>

//                 <label for="upload"><b>Upload Application</b></label>
//                 <input type="file" name="upload" id="upload" required><br/><br/>
//                 <hr>
//                 <button type="submit" class="registerbtn">Register</button>
//             </div>

           

//         </div>
//     </form>
//     </>
//   )
// }


import React,{ useState} from 'react';
import './Event_Organiser.css';
// import PersonIcon from '@mui/icons-material/Person';
export default function Event_Organiser() {
    const [allvalues,setAllvalues] = useState([{
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

    const onchangehandler= (e,i) =>
    {
        const{value,name}=e.target;
        objvalue[i][name] = value;
        setAllvalues(objvalue);
        console.log(objvalue);
    }
  return (
    <>
    <div>
        <form action="">
        <div className="box">
            <div className="container">
                <h1 >APPLICATION FOR EVENT ORGANISER</h1><br/>
                <hr/>
                <label htmlFor="email"/><b>Name of Applicant</b>
                {/* <PersonIcon style={{marginLeft:"22px"}}/> */}
                <input  type="text" value={allvalues.nappli} onChange={(e,i)=>onchangehandler(e,i)} id="nappli" name="nappli" required/><br/><br/>

                <label htmlFor="email"><b>Name of Organization</b></label>
                <input  type="text" value={allvalues.norgan} onChange={(e,i)=>onchangehandler(e,i)} id="norgan" name="norgan" required/><br/><br/>


                <label htmlFor="email"><b>District Pincode</b></label>
                <input  type="text" value={allvalues.pin} onChange={(e,i)=>onchangehandler(e,i)} id="pin" name="pin" required/><br/><br/>

      
                <label htmlFor="email"><b>Address</b></label>
                <input  type="text" value={allvalues.address} onChange={(e,i)=>onchangehandler(e,i)} id="address" name="address"  required/><br/><br/>
               

                <label htmlFor="email"><b>Email</b></label>
                <input  type="text" value={allvalues.email} onChange={(e,i)=>onchangehandler(e,i)} id="email" name="email"  required/><br/><br/>

                <label htmlFor="psw"><b>Phone No.</b></label>
                <input  type="text" value={allvalues.phoneno} onChange={(e,i)=>onchangehandler(e,i)} id="phoneno" name="phoneno" required/><br/><br/>

                <label htmlFor="psw"><b>Date</b></label>
                <input  type="text" value={allvalues.date} onChange={(e,i)=>onchangehandler(e,i)} id="date" name="date" required/><br/><br/>
               
                <div className="time">
                <label htmlFor="confirm-psw"><b>Time</b></label>
                <span><b>From</b></span><input type="text1" value={allvalues.ftime} onChange={(e,i)=>onchangehandler(e,i)} id="ftime" name="ftime" required/> <b>To</b><input  type="text1" value={allvalues.ttime} onChange={(e,i)=>onchangehandler(e,i)} id="ttime" name="ttime" required/><br/> <br/>
                </div>
               
                {/* <label htmlFor="psw"><b>Password</b></label>
                <input  type="password" value={allvalues.password} onChange={(e)=>onchangehandler(e,i)} id="pname" name="pname" required/><br/><br/>


                <label htmlFor="psw"><b>Confirm Password</b></label>
                <input  type="password" value={allvalues.cpassword} onChange={(e)=>onchangehandler(e,i)} id="cpname" name="cpname" required/><br/><br/> */}

                <label htmlFor="email"><b>Purpose of Event</b></label>
                <input  type="text" value={allvalues.purpose} onChange={(e,i)=>onchangehandler(e,i)} id="purpose" name="purpose" required/><br/><br/>


                <label htmlFor="email"><b> Information of Event </b></label>
                <input  type="text" value={allvalues.otherinformation} onChange={(e,i)=>onchangehandler(e,i)} id="otherinformation" name="otherinformation" required/><br/><br/>
               
                <label htmlFor="email"><b> Upload Application </b></label>
                <input type="file" id="myfile" name="myfile"/><br/><br/>
                <hr/>
                <button type="submit" className="registerbtn">Register</button>
               
            </div>


        </div>
    </form>
    </div>
    </>
  )
}