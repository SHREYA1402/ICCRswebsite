import React from 'react'
import axios, { post } from 'axios';
class FileUpload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: ''
        }
    }

    onChange(e)
    {
       let files=e.target.files;
       let reader= new FileReader();
       reader.readAsDataURL(files[0]);
       
       reader.onload=(e)=>{
        const url="http://localhost:8080/groundAuthorityregistion/add";
        const formData={file:e.target.result}
        return post(url, formData)
          .then(response=>console.warn("result", response))
       }
  
    }
    render(){
        return(
            <div onSubmit={this.onFormSubmit}>
             <label>Aadhar Card</label>
             <input type="file"  name="file" onChange={(e)=>this.onChange(e)} required />   

            </div>
        )
    }
}

export default FileUpload;


