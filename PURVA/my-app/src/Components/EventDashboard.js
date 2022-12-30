import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import './EventDashboard.css';
export default function EventDashboard() {
   const countries =[
      {id:"1",name:"Maharashtra"},
      {id:"2",name:"Madhyapradesh"},
      {id:"3",name:"Gujarat"}
   ];
   
   const states = [
      {id: "1",countryId:"1",name:"Mumbai"},
      {id: "2",countryId:"1",name:"Pune"},
      {id: "3",countryId:"1",name:"Nagpur"},
      {id: "4",countryId:"2",name:"Bhopal"},
      {id: "5",countryId:"2",name:"Indore"},
      {id: "6",countryId:"2",name:"Gwalior"},
      {id: "7",countryId:"3",name:"Ahemdabad"},
      {id: "8",countryId:"3",name:"Surat"},
      {id: "9",countryId:"3",name:"Baroda"}
   ]
   
   const cities = [
      {id: "1",stateId:"1",name:"Wankhede Stadium"},
      {id: "2",stateId:"1",name:"Brabourne Stadium"},
      {id: "3",stateId:"1",name:"Mumbai Football Arena"},
      {id: "4",stateId:"2",name:"Shree Shivchhatrapati Sports Complex"},
      {id: "5",stateId:"2",name:"Jawaharlal Nehru Stadium"},
      {id: "6",stateId:"2",name:"Belwadi Stadium"},
      {id: "7",stateId:"3",name:"Yashwant Stadium Nagpur"},
      {id: "8",stateId:"3",name:"Vidarbha Cricket Association Stadium"},
      {id: "9",stateId:"3",name:"BCA Stadium"},
      {id: "10",stateId:"4",name:"Tatya Tope Stadium Bhopal"},
      {id: "11",stateId:"4",name:"Motilal Nehru Stadium"},
      {id: "12",stateId:"4",name:"Bab-e-Aali Stadium"},
      {id: "13",stateId:"5",name:"Nehru Stadium Garden"},
      {id: "14",stateId:"5",name:"Holkar Stadium"},
      {id: "15",stateId:"5",name:"Cricket Stadium, IIM Indor"},
      {id: "16",stateId:"6",name:"Captain Roop Singh Cricket Stadium"},
      {id: "17",stateId:"6",name:"Baaz Stadium"},
      {id: "18",stateId:"6",name:"Railway Hockey Stadium Gwalior"},
      {id: "19",stateId:"7",name:"Sardar Vallabhbhai Patel Stadium, Ahmedabad"},
      {id: "20",stateId:"7",name:"Narendra Modi Stadium"},
      {id: "21",stateId:"7",name:"EKA Arena"},
      {id: "22",stateId:"8",name:"Pandit Dindayal Upadhyay Indoor Stadium"},
      {id: "23",stateId:"8",name:"Lalbhai Contractor Stadium"},
      {id: "24",stateId:"8",name:"Surat International Stadium"},
      {id: "25",stateId:"9",name:"Akota Stadium"},
      {id: "26",stateId:"9",name:"IOCL GUJARAT REFINERY CRICKET STADIUM"},
      {id: "27",stateId:"9",name:"Madhav Rao Sindhiya Railway Stadium"},
   ]
   
   const [country, setCountry] = useState([]);
   const [state, setState] = useState([]);
   const [city, setCity] = useState([]);
   
   
   useEffect(()=>{
      setCountry(countries);
   },[])
   
   const handleCountry = (id) => {
   const dt =states.filter(x => x.countryId === id);
   setState(dt);
   }
   
   const handleState = (id) => {
      const dt = cities.filter(x =>x.stateId === id);
      setCity(dt);
   }
     
  return (
   <div className='App'>
   <select id='ddlCountry' className='form-control' onChange={(e) => handleCountry(e.target.value)}>
      <option value="0">Select State</option>
   {
   country &&
   country !== undefined ?
   country.map((ctr,index) => {
      return(
         <option key={index} value={ctr.id}>{ctr.name}</option>

      )
   })
   :"No Country"
}

</select>
<br>
</br>
<select id='ddlStates'className='form-control' onChange={(e) => handleState(e.target.value)}>
      <option value="0">Select city</option>
   {
   state &&
   state !== undefined ?
   state.map((ctr,index) => {
      return(
         <option key={index} value={ctr.id}>{ctr.name}</option>

      )
   })
   :"No State"
}

</select>
<br></br>
<select id='ddlCity'className='form-control' >
      <option value="0">Select Stadium</option>
   {
   city &&
   city !== undefined ?
   city.map((ctr,index) => {
      return(
         <option key={index} value={ctr.id}>{ctr.name}</option>

      )
   })
   :"No City"
}

</select>

 </div>
  )
}
