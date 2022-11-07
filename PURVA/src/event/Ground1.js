import './Ground123.css';
function GroundReg() {
    return (
        <>
            <div className="container">
                <h2>Ground Registration Form </h2>
                <br />
                <hr className='line' />
                <section className="mt-5">
                    <div className="card p-5 rounded p20">
                        <ul className="stepper stepper2">
                            <li className="list-inline-item stepper__list active">
                                <h6 className="stepper__list--name">Step</h6>
                                <h5 className="stepper__list--number">1</h5>
                                <h4 className="stepper__list--title">
                                    Sports Training Center<br />
                                    Information
                                </h4>
                            </li>
                            <li className="list-inline-item stepper__list">
                                <h6 className="stepper__list--name">Step</h6>
                                <h5 className="stepper__list--number">2</h5>
                                <h4 className="stepper__list--title">
                                    Coach And
                                    Athlete<br /> Information
                                </h4>
                            </li>

                            <li className="list-inline-item stepper__list">
                                <h6 className="stepper__list--name">Step</h6>
                                <h5 className="stepper__list--number">3</h5>
                                <h4 className="stepper__list--title">
                                    Upload <br />
                                    Documents
                                </h4>
                            </li>

                        </ul>
                    </div>
                </section>


                <form>
                    <div className="formfirst">
                        <h4 className="subhead"> SPORTS TRAINING CENTER INFORMATION </h4>
                        <hr className='line' />
                        <div className="fields">
                            <div className="Input-Box">
                                <label>Name of the infrastructure</label><br />
                                <input type="text" id="" class="input" required />
                            </div>

                            <div className="Input-Box " >
                                <label>Ownership Type</label>
                                <br />
                                <select className="form-control" id="" name="" required>
                                    <option value="disabled">Select Type</option>
                                    <option value="Central Government">Central Government</option>
                                    <option value="Private / NGO">Private / NGO</option>
                                    <option value="Sports Authority of India">Sports Authority of India</option>
                                    <option value="State Government">State Government</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <label>Status</label>
                                <br />
                                <select className="form-control" id="" name="" required>
                                    <option value="" disabled>Select Status</option>
                                    <option value="Company">Company</option>
                                    <option value="Firm">Firm</option>
                                    <option value="Individual">Individual</option>
                                    <option value="Non-profit organisation">Non-profit organisation</option>
                                    <option value="Society">Society</option>
                                    <option value="Trust">Trust</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <label>Year of Establishment</label>
                                <br />
                                <select className="form-control" id="" name="" required>
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

                            <div className="Input-Box">
                                <label>Name of the Administrator</label><br />
                                <input type="text" id="" class="input" required />
                            </div>

                            <div className="Input-Box " >
                                <label>Infrastructure type</label>
                                <br />
                                <select className="form-control" id="" name="" required>
                                    <option value="">Select Type</option>
                                    <option value="">Single-Facility</option>
                                    <option value="">Multi-Facility</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <label>Registration number</label><br />
                                <input type="number" id="" class="input" required />
                            </div>


                            <div className="Input-Box">
                                <label>Any other detail</label><br />
                                <input type="text" id="" class="input" required />
                            </div>

                        </div>


                        <h4 className="subhead">ADDRESS</h4>
                        <hr className='line' />
                        <div className="fields">
                            <div className="Input-Box">
                                <label></label>
                                <br /><br />
                                <select className="form-control" id="" name="" required>
                                    <option disabled value="">select</option>
                                    <option value="">C/o</option>
                                    <option value="">D/o</option>
                                    <option value="">N/o</option>
                                </select>
                            </div>


                            <div className="Input-Box">
                                <label>House/Plot/Building Number</label><br />

                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Street</label>
                                <br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Landmark</label><br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Locality</label><br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Postal Code</label><br />
                                <input type="text" id="" class="input" required maxLength={6} minLength={6} />
                            </div>

                            <div className="Input-Box">
                                <label>State</label><br />
                                <select className="form-control" id="" name="" required>
                                    <option value="">Select State</option>
                                    <option value="1">Andaman and Nicobar Islands</option>
                                    <option value="2">Andhra Pradesh</option>
                                    <option value="3">Arunachal Pradesh</option>
                                    <option value="4">Assam</option>
                                    <option value="5">Bihar</option>
                                    <option value="6">Chandigarh</option>
                                    <option value="7">Chhattisgarh</option>
                                    <option value="8">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="9">Daman and Diu</option>
                                    <option value="10">Delhi</option>
                                    <option value="11">Goa</option>
                                    <option value="12">Gujarat</option>
                                    <option value="13">Haryana</option>
                                    <option value="14">Himachal Pradesh</option>
                                    <option value="15">Jammu and Kashmir</option>
                                    <option value="16">Jharkhand</option>
                                    <option value="17">Karnataka</option>
                                    <option value="18">Kerala</option>
                                    <option value="37">Ladakh</option>
                                    <option value="19">Lakshadweep</option>
                                    <option value="20">Madhya Pradesh</option>
                                    <option value="21">Maharashtra</option>
                                    <option value="22">Manipur</option>
                                    <option value="23">Meghalaya</option>
                                    <option value="24">Mizoram</option>
                                    <option value="25">Nagaland</option>
                                    <option value="26">Odisha</option>
                                    <option value="27">Puducherry</option>
                                    <option value="28">Punjab</option>
                                    <option value="29">Rajasthan</option>
                                    <option value="30">Sikkim</option>
                                    <option value="31">Tamil Nadu</option>
                                    <option value="36">Telangana</option>
                                    <option value="32">Tripura</option>
                                    <option value="33">Uttar Pradesh</option>
                                    <option value="34">Uttarakhand</option>
                                    <option value="35">West Bengal</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <label>District</label><br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Sub District</label><br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>City</label>
                                <br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Contact Person</label>
                                <br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Designation</label>
                                <br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Email ID</label>
                                <br />
                                <input type="text" id="" class="input" required maxLength={50} />
                            </div>

                            <div className="Input-Box">
                                <label>Fax. Number</label>
                                <br />
                                <input type="number" id="" class="input" required maxLength={10} minLength={10} />
                            </div>

                            <div className="Input-Box">
                                <label>Mobile Number</label>
                                <br />
                                <input type="number" id="" class="input" required maxLength={10} minLength={10} />
                            </div>

                            <div className="Input-Box">
                                <label>Alternate Number</label>
                                <br />
                                <input type="number" id="" class="input" required maxLength={10} minLength={10} />
                            </div>
                        </div>

                        <h4 className="subhead">LOCATION</h4>
                        <hr className='line' />
                        <div className="fields">
                            <div className="Input-Box">
                                <label>Geographical location</label>
                                <br />
                                <input id="" class="input" required />
                            </div>
                            <div> <button type="button" className="">click here to get location</button></div>
                        </div>


                        <h4 className="subhead">SPORTS</h4>
                        <hr className='line' />
                        <div className="fields">
                            <div className="Input-Box">
                                <lable>Sports Discipline</lable><br />
                                <select className="form-control" id="" name="" required>
                                    <option value="">Select Sports Discipline</option>
                                    <option value="1">Archery</option>
                                    <option value="16">Athletics</option>
                                    <option value="15">Badminton</option>
                                    <option value="14">Basketball</option>
                                    <option value="13">Boxing</option>
                                    <option value="35">Canoeing &amp; Kayaking</option>
                                    <option value="52">Chess</option>
                                    <option value="19">Cycling</option>
                                    <option value="39">Diving</option>
                                    <option value="41">Equestrian</option>
                                    <option value="21">Fencing</option>
                                    <option value="12">Football</option>
                                    <option value="23">Gatka</option>
                                    <option value="58">Golf</option>
                                    <option value="11">Gymnastics</option>
                                    <option value="34">Handball</option>
                                    <option value="10">Hockey</option>
                                    <option value="45">Ice Hockey</option>
                                    <option value="9">Judo</option>
                                    <option value="8">Kabaddi</option>
                                    <option value="24">Kalaripayattu</option>
                                    <option value="37">Karate</option>
                                    <option value="7">Kho-Kho</option>
                                    <option value="42">Khomlainai</option>
                                    <option value="50">Korfball</option>
                                    <option value="30">Lawn Bowl</option>
                                    <option value="22">Mallakhamb</option>
                                    <option value="44">Mukna</option>
                                    <option value="27">Para - Athletics</option>
                                    <option value="26">Para - Badminton</option>
                                    <option value="29">Para - Powerlifting</option>
                                    <option value="28">Para - Swimming</option>
                                    <option value="46">Pencak Silat</option>
                                    <option value="48">Powerlifting</option>
                                    <option value="49">RollBall</option>
                                    <option value="20">Rowing</option>
                                    <option value="36">Rugby</option>
                                    <option value="40">Sailing</option>
                                    <option value="31">Sepaktakraw</option>
                                    <option value="6">Shooting</option>
                                    <option value="43">Silambam</option>
                                    <option value="38">Softball</option>
                                    <option value="47">Sqay</option>
                                    <option value="5">Swimming</option>
                                    <option value="18">Table Tennis</option>
                                    <option value="33">Taekwondo</option>
                                    <option value="53">Tamo Martial Art</option>
                                    <option value="17">Tennis</option>
                                    <option value="25">Thang-Ta</option>
                                    <option value="4">Volleyball</option>
                                    <option value="66">Water Polo</option>
                                    <option value="3">Weightlifting</option>
                                    <option value="2">Wrestling</option>
                                    <option value="32">Wushu</option>
                                    <option value="51">Yogasana</option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <lable>Event Type</lable><br />
                                <select className="form-control" id="" name="" required>
                                    <option disabled value="">select</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="Input-Box">
                                <lable>Sanctioned Strength (Men)</lable><br />
                                <input type="number" id="" class="input" required maxLength="20" minLength="0" />

                            </div>
                            <div className="Input-Box">
                                <lable>Sanctioned Strength (Women)</lable><br />
                                <input type="number" id="" class="input" required maxLength="20" minLength="0" />
                            </div>

                            <button type="button" className=""> Add <br /> More </button>


                        </div>
                        <h4 className="subhead">PASSWORD</h4>
                        <hr className='line' />
                        <div className="fields">
                            <div className="Input-Box">
                                <lable>Login Password</lable><br />
                                <input type="text" id="" class="input" required maxLength="10" minLength="4" />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="Input-Box"><br />
                                <lable>Confirm Password</lable>
                                <input type="text" id="" class="input" required maxLength="10" minLength="4" />
                            </div>


                        </div>
                        <div className="fields">

                            <div className="">

                                <input type="checkbox" id="terms" name="terms_conditions"
                                    className="" />
                                <label className="custom-control-label" htmlFor="terms">I agree to<a
                                    href="/Content/website_pdf/Registration_Terms_conditions.pdf"
                                    target="_blank"> Terms and Conditions</a>

                                </label>
                            </div>

                            <div className="">
                                <button type="reset" id="coachclearform" value="Reset"
                                    className="">Clear Form</button>
                                <button type="button" value="Submit" id=""
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