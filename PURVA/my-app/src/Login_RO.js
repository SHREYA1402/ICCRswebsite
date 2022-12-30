import axios from 'axios';  
import { useNavigate } from "react-router-dom";

import React, { useState, Row, ModalBody } from 'react'  


const Login_RO=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({email:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value}); 
    }


    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
            email:user.email,
            password:user.password

        }

       // console.log(sendData);

        axios.post('http://localhost/php_login/login.php',sendData)
        .then((result)=>{
            if (result.data.Status === '200') { 
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('userName', (result.data.first_name+ ' ' +result.data.first_name ));  
                // window.location.href = '/ICCR'
                navigate ('/ROs');
                
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           
           alert('Invalid User'); 
        }
      })  
    }


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
        <div className="row">
             <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        <div className="row">
           <div className="e" style={{fontSize:'30px'}}>Email:</div>
           <div className="f"><input type="email" name="email" placeholder="Enter Email" 
           onChange={handleChange} value={user.email} required/></div>
        </div>
        <div className="row">
           <div className="e" style={{fontSize:'30px'}}  > Password:</div>
           <div className="f"><input type="password" name="password" placeholder="Enter Password" 
            onChange={handleChange} value={user.password}  /></div>
        </div>


        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="submit"  className="btn btn-success" value="Please Login" onClick={() => window.location.href = '/ROs' } />
           </div>
        </div>
        </div>

        </form>
 
      


        //  <form onSubmit={submitForm}>
        // <div className="main-box"> 
        //  <div className="Row">
        //                 <label htmlFor="uname"><b>Email:</b></label>
        //                 <input type="email" placeholder="Enter Username" name="uname" required
        //                 onChange={handleChange} value={user.email} /><br /><br />

        //                 <label htmlFor="psw"><b>Password:</b></label>
        //                 <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} value={user.password}/>
                   
        //                 <button type="submit" onClick={() => window.location.href = '/ROs' }>Login</button>
        //                 <label>
        //                     <input type="checkbox" checked="checked" className="remember" /> <p>Remember me</p>
        //                 </label>
                        
        // </div>
        // </div>
        // </form>
        
        
    )
}

export default Login_RO;