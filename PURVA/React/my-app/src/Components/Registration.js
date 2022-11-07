import React,{ useState} from 'react'
import './Registration.css';

export default function Registration() {
    const [allvalues,setAllvalues] = useState([{
        nappli:"",
        norgan:"",
        state:"",
        district:"",
        address:"",
        email:"",
        password:"",
        cpassword:"",
        phoneno:"",
        achievement:"",
        otherinformation:"",

    }])
    const objvalue = [...allvalues]

    const onchangehandler= (e,i) =>
    {
        const{value,name}=e.target;
        objvalue[i][name] = value;
        setAllvalues(objvalue);
    }
  return (
    <>
    <div>
        <form action="">
        <div className="box">
            <div className="container">
                <h1 >REGISTRATION FORM</h1><br/>
                <hr/>
                <label htmlFor="email"/><b>Name of Applicant</b>
                <input  type="text" value={allvalues.nappli} onChange={(e,i)=>onchangehandler(e,i)} id="hname" name="hname" required/><br/><br/>

                <label htmlFor="email"><b>Name of Organization</b></label>
                <input  type="text" value={allvalues.norgan} onChange={(e,i)=>onchangehandler(e,i)} id="zname" name="zname" required/><br/><br/>


                <label htmlFor="email"><b>State</b></label>
                <input  type="text" value={allvalues.state} onChange={(e,i)=>onchangehandler(e,i)} id="sname" name="sname" required/><br/><br/>

                <label htmlFor="confirm-psw"><b>District</b></label>
                <input  type="text1" value={allvalues.district} onChange={(e,i)=>onchangehandler(e,i)} id="lname" name="lname" required/> <b>Pincode</b><input  type="text1" value={allvalues.district} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/> <br/>

                <label htmlFor="email"><b>Address</b></label>
                <input  type="text" value={allvalues.address} onChange={(e,i)=>onchangehandler(e,i)} id="aname" name="aname"  required/><br/><br/>
                <input  type="text" value={allvalues.address} onChange={(e,i)=>onchangehandler(e,i)} id="aname" name="aname"  required/><br/><br/>

                <label htmlFor="email"><b>Email</b></label>
                <input  type="text" value={allvalues.email} onChange={(e,i)=>onchangehandler(e,i)} id="ename" name="ename"  required/><br/><br/>

                <label htmlFor="psw"><b>Password</b></label>
                <input  type="password" value={allvalues.password} onChange={(e,i)=>onchangehandler(e,i)} id="pname" name="pname" required/><br/><br/>


                <label htmlFor="psw"><b>Confirm Password</b></label>
                <input  type="password" value={allvalues.cpassword} onChange={(e,i)=>onchangehandler(e,i)} id="cpname" name="cpname" required/><br/><br/>


                <label htmlFor="psw"><b>Phone No.</b></label>
                <input  type="text" value={allvalues.phoneno} onChange={(e,i)=>onchangehandler(e,i)} id="phname" name="phname" required/><br/><br/>


                <label htmlFor="email"><b>Achievements</b></label>
                <input  type="text" value={allvalues.achievement} onChange={(e,i)=>onchangehandler(e,i)} id="achname" name="achname" required/><br/><br/>


                <label htmlFor="email"><b>Other Information </b></label>
                <input  type="text" value={allvalues.otherinformation} onChange={(e,i)=>onchangehandler(e,i)} id="oiname" name="h=oiname" required/><br/><br/>

                <hr/>
                <button type="submit" className="registerbtn">Register</button>
                <div className="containersignin">
                    <p>Already have an account? <a href="sign-ground.html">Sign in</a></p>
                </div>
            </div>


        </div>
    </form>
    </div>
    </>
  )
}