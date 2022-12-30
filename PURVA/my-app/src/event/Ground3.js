import './Ground123.css';
function GroundReg() {
    return (


        <>
            <div className="container" style={{ padding: "10px" }}>

                <h4 className="subhead"> UPLOAD DOCUMENTS </h4>
                <hr className='line' />
                <div className="font">
                    <label>Aadhar Card</label>
                    <input type="file" id="" class="upload" required />
                </div>

                <div className="font">
                    <label>Application</label>
                    <input type="file" id="" class="upload" required />
                </div>

                <div className="font">
                    <label>Certificate</label>
                    <input type="file" id="" class="upload" required />
                </div>

                <div className="font">
                    <label>Land Ownership(Owned/Leased)</label>
                    <input type="file" id="" class="upload" required />
                </div>

                <div className="font">
                    <label>Ground Image</label>
                    <input type="file" id="" class="upload" required />
                </div>


            </div>
        </>
    );
}

export default GroundReg;