import React, { useState } from 'react'

import { useNavigate, Link } from "react-router-dom";
import './Ground123.css';
function GroundReg() {
    const [allvalues, setAllvalues] = useState([{
        nlanes: "",
        npitch: "",
        ncoaches: "",
        accomo: "",
        ncourt: "",
        nball: "",
        nnet: "",
        tcourt: "",
    }])
    const objvalue = [...allvalues]
    const changeHandler = (e) => {
        setAllvalues({ ...allvalues, value: e.target.value });
    }
    const navigate = useNavigate();
    const third = () => {
        navigate("/groundAuthorityregistion/steptwo/stepthree")
    }


    return (
        <>
            <div className="container" style={{ padding: "10px" }}>

                <form>
                    <div className="formfirst">
                        <h4 className="subhead">FACILITY TYPE</h4>
                        <hr className='line' />
                        <div className="Input-Box " style={{ padding: "10px" }}>
                            <label style={{ fontSize: "18px" }}>Select the available facilities</label>
                            <br />
                            <select className="form-control" id="" name="" onChange={changeHandler} required style={{ width: "100%" }}>
                                <option value="">Select</option>
                                <option value="volleyball" >Volleyball</option>
                                <option value="cricket" >Cricket</option>
                            </select>
                        </div>
                        <div className="fields">


                            <div className="Input-Box">
                                <label>Number of lanes</label><br />
                                <input type="number" id="" className="input" value={allvalues.nlanes} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Number of Pitch</label><br />
                                <input type="number" id="" className="input" value={allvalues.npitch} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Number of the coaches</label><br />
                                <input type="number" id="" className="input" value={allvalues.ncoaches} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Accomodation for Sportpersons</label><br />
                                <input type="text" id="" className="input" value={allvalues.accomo} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box ">
                                <label>Food lit</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Disability friendly</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Sports for Women</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Year built</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Food lit</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Year</option>
                                    <option>1980</option>
                                    <option>1981</option>
                                    <option>1982</option>
                                    <option>1983</option>
                                    <option>1984</option>
                                    <option>1985</option>
                                    <option>1986</option>
                                    <option>1987</option>
                                    <option>1988</option>
                                    <option>1989</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Access Type</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Selection">Selection </option>
                                    <option value="Members">Members</option>
                                    <option value="Guest">Guest</option>
                                    <option value="Pay">Pay & Play</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Membership</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <label>Membership Restriction(if any)</label><br />
                                <input type="text" id="" className="input" />
                            </div>

                            <div className="Input-Box ">
                                <label>Changing room</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Opening time</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Mon-fri">Mon-fri</option>
                                    <option value="Weekend">Weekend</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Club</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="Input-Box ">
                                <label>Medical facility</label>
                                <br />
                                <select className="form-control" id="" name="" onChange={changeHandler} required>
                                    <option value="">Select Type</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
            <div className="container" style={{ padding: "10px" }}>
                <form>
                    <div className="formfirst">
                        <div className="fields">
                            <div className="Input-Box">
                                <label>Number of court</label><br />
                                <input type="number" id="" className="input" value={allvalues.ncourt} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Number of ball</label><br />
                                <input type="number" id="" className="input" value={allvalues.nball} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Number of net</label><br />
                                <input type="number" id="" className="input" value={allvalues.nnet} onChange={changeHandler} required />
                            </div>

                            <div className="Input-Box">
                                <label>Type of court</label><br />
                                <input type="number" id="" className="input" value={allvalues.tcourt} onChange={changeHandler} required />
                            </div>
                            <div className="">
                                <button type="reset" id="coachclearform" value="Reset"
                                    className="">Clear Form</button>
                                <button type="button" onClick={third} value="Submit" id=""
                                    className="">Save and Continue</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>







        </>


    );
}

export default GroundReg;