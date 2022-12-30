import React,{ useState} from 'react'
import './App.css';
export default function Form() {
  const [allvalues,setAllvalues] = useState([{
      from:"",
      address:"",
      date:"",
      ground:"",
      spoc:"",
      subject:"",
      above:"",
      info:"",
      
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
     <h1 style={{'fontSize':'25px'}}><u>APPLICATION FOR CLUB ENROLLMENT</u></h1>
    <form >
        <label htmlFor="fname">From:</label>
        <input  type="text" value={allvalues.from} onChange={(e,i)=>onchangehandler(e,i)} id="fname" name="fname" required/><br/><br/>

        <label htmlFor="lname">Address :</label>
        <input  type="text" value={allvalues.address} onChange={(e,i)=>onchangehandler(e,i)} id="aname" name="aname"  required/><br/><br/>

        <label htmlFor="gname">Dated :</label>
        <input  type="text" value={allvalues.date} onChange={(e,i)=>onchangehandler(e,i)} id="dname" name="dname" required/><br/><br/>
        <p>To' <br/>
           The Executive Director,<br/> 
        </p>
        <label htmlFor="hname">The Ground Authority of</label><br/>
        <input  type="text" value={allvalues.ground} onChange={(e,i)=>onchangehandler(e,i)} id="gname" name="gname" required/><br/><br/>
        (Address of Ground Authority) <br/>

        <label htmlFor="hname">Name of SPOC of Ground/Stadium</label><br/>
        <input  type="text" value={allvalues.spoc} onChange={(e,i)=>onchangehandler(e,i)} id="sname" name="sname" required/><br/><br/>
        (Address of SPOC) <br/>
        <label htmlFor="oname">Sub: Regarding Registration of</label>
        <input  type="text" value={allvalues.subject} onChange={(e,i)=>onchangehandler(e,i)} id="subname" name="subname" required/>Sports Club<br/><br/>
         Sir, <br/>
         
         <label htmlFor="pname">With reference to the Subject above, I the undersigned Mr./Mrs.</label>
         <input  type="text" value={allvalues.above} onChange={(e,i)=>onchangehandler(e,i)} id="iname" name="iname" required/>President/Secretary of the <input  type="text" value={allvalues.above} onChange={(e,i)=>onchangehandler(e,i)} id="iname" name="iname" required/>Club enclose herewith the below mentioned documents and details required by your office in order to register our club on your office in the order to register our club on your ground/stadium<br/>

         <p>1.Copy of the Certificate unser the Societies Registration Act, 1860 issude by office of the District Registrator of Societies.</p>  
           <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>2.Certified copy of the Memorendum/Constitution of the Sports Club by the office of the District Registor. </p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>3.The name of the President, Secretary and Tresurer along with their passport size photograph,residential address (the copy of the address proof), phone no., Email ID. </p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
        
         <p>4.The list of the members of the General Body Committee with mimimum 25 member with their Residential Address,Phone No. Email ID etc. </p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>5.The name of the Sports Club <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         Address of the Sports Club <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         village <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         Taluka <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         District <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         Constituency <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         Phone no. <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/>
         E-mail ID <input  type="text" value={allvalues.info} onChange={(e,i)=>onchangehandler(e,i)} id="oname" name="oname" required/><br/></p>
         
         <p>6.NOC of Panchayat/Municipality (original copy signed by the Secratary)starting that they have no objection to register the Club at Ground/Stadium.<br/></p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>7.NOC from the nearest Sports Club which is registered/recognized by Ground/Stadium.<br/></p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
        
         <p>8.Whether the Club is affiliated to any State Sports Association<br/></p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>9.Report of the activities conducted by the club during the last 3 yrs along with the Photographs, newspaper clipping, etc if conducted.<br/></p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>10.Details of the Sports/Game that the Sports Club promotes for the youth of the Club, inclusive of the list of outstanding sportspersons of the Sports Club.<br/></p>
         <input type="file" id="myfile" name="myfile"/><br/><br/>
         
         <p>This is for your information and necessary action.</p>
             <p>Yours faithfully,<br/>
              (President/Secretary)<br/>
              of the Sports Club<br/>
             </p>
             <button type="submit" className="button">Submit</button>
      </form>
    
</>
    
  )
}
