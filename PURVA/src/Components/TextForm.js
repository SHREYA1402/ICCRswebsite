import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log('Uppercase was clicked:'+ text);//after using +text we can see the newly inserted text in console as well.  
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    
    const handleOnChange =(event)=>{
        // console.log('On Change');
        setText(event.target.value);//after using this we can enter value in text box after clicking on button.
    }
    const [text, setText] = useState('Enter text here');
    const navigate = useNavigate();
  return (
    <div>
     <h1>{props.heading}</h1>   
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>  
<button type="button" className="btn btn-primary mx-5" onClick={handleUpClick}>Convert to upper case</button>
<button type="button" className="btn btn-primary mx-5" onClick={() =>navigate('/Submit')
}>Click</button>
    </div>
  )
}
