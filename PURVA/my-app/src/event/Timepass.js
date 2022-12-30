import React,{ useState} from 'react'
import './Ground123.css';
function GroundReg(props) {
        const [allvalues,setAllvalues] =useState([{
            adhaar:"",
            appli:"",
            certi:"",
            land:"",
            img:"",
        }])
        
        const objvalue = [...allvalues]
    
        const changeHandler = (e) =>
        {
            setAllvalues({...allvalues,value:e.target.value});
        }
    
    
    return (


        <>
            <div className="container" style={{ padding: "10px" }}>

                <h4 className="subhead"> UPLOAD DOCUMENTS </h4>
                <hr className='line' />
                <div className="font">
                    <label>Aadhar Card</label>
                    <input type="file" value={allvalues.adhaar} onChange={changeHandler} id="adhaar" name="adhaar" required/>
                </div>

                <div className="font">
                    <label>Application</label>
                    <input type="file" value={allvalues.appli} onChange={changeHandler} id="appli" name="appli" required/>
                </div>

                <div className="font">
                    <label>Certificate</label>
                    <input type="file" value={allvalues.certi} onChange={changeHandler} id="certi" name="certi" required/>
                </div>

                <div className="font">
                    <label>Land Ownership(Owned/Leased)</label>
                    <input type="file"  value={allvalues.land} onChange={changeHandler} id="land" name="land" required/>
                </div>

                <div className="font">
                    <label>Ground Image</label>
                    <input type="file" value={allvalues.img} onChange={changeHandler} id="img" name="img" required/>
                </div>


            </div>
        </>
    );
}

export default GroundReg;