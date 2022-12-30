// import React, { useState }from "react";
// import './Sign.css';
// function Signin() {
//     const [isOpen, setIsOpen] = useState(false);
 
//     const toggleSign = () => {
//       setIsOpen(!isOpen);
//     }
//     return (
//         <>
//             <button style={{width:"auto"}} onClick={toggleSign}>Login</button>
//             {/* <button onClick="document.getElementById('id01').style.display='block'" style={{width:"auto"}} onClick={toggleSign}>Login</button> */}

//             <div id="id01" className="modal">

                // <form className="modal-content animate" action="/action_page.php" method="post">
                //     <div className="imgcontainer">
                //         <span onClick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>

                //     </div>

                //     <div className="container">
                //         <label htmlFor="uname"><b>Username</b></label>
                //         <input type="text" placeholder="Enter Username" name="uname" required />

                //         <label htmlFor="psw"><b>Password</b></label>
                //         <input type="password" placeholder="Enter Password" name="psw" required />

                //         <button type="submit">Login</button>
                //         <label>
                //             <input type="checkbox" checked="checked" name="remember" /> <p>Remember me</p>
                //         </label>
                //     </div>

                //     <div className="container" style={{backgroundColor:"#f1f1f1"}} >
                //         <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                      
                //         <span className="psw">Forgot <a href="/">password?</a></span>
                //     </div>


                // </form>
// handleClose={toggleSign}
//             </div>




//         </>



//     );

// }

// export default Signin;
//////////////////////////////////////////////////////////////////////////////////

// import React, { useState }from "react";
 
// const Popup = props => {
//   return (
    
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}>x</span>
//         {props.content}
//       </div>
//     </div>
    
    
//   );

// };
 
// export default Popup;


import React, { useState }from "react";
import {Modal,ModalHeader,ModalBody,Row} from "reactstrap";
import './Sign.css';
 function Sign() {
       const [modal, setmodal] = useState(false);
  return (
    <div>
        <Modal
        size='lg'
        isOpen={modal}
        toggle={()=>setmodal(!modal)}
        >
            <ModalHeader
             toggle={()=>setmodal(!modal)}
             >
            </ModalHeader>
            <ModalBody>
            <form className="modal-content animate" action="/action_page.php" method="post">
                
                    {/* <div className="imgcontainer">
                        <span onClick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>

                    </div> */}
                        
                    <div className="container">
                        <Row>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" className="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" className="psw" required />
                   
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" className="remember" /> <p>Remember me</p>
                        </label>
                        </Row>
                    </div>

                    {/* <div className="container" style={{backgroundColor:"#f1f1f1"}} >
                        <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                      
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div> */}


                </form>
            </ModalBody>
        </Modal>
         <button style={{width:"auto"}} onClick={()=>setmodal(true)}>Login</button>
    </div>
  )
}
 export default Sign;