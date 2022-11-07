import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Grid,Link,Container,Checkbox,CssBaseline,TextField, FormControlLabel,Box, Button, Typography, styled} from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { borderBottom } from "@mui/system";

const theme = createTheme();
export default function MYprofile () {

    const [allvalues, setAllvalues] = useState({
        nappli:"",
      });

  const  imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result })
			}
		}
		reader.readAsDataURL(e.target.files[0])
	};

    const onchangehandler = (e) => {
        setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
      };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        if(allvalues.password===allvalues.cpassword )
        {
    
            // await addEventUser(allvalues);
        }
        else
        {
            alert("Enter Password Correctly")
        }
        // window.location.href('/eventdashboard')
      };  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" style={{}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding:10,
            boxShadow: 3,
            maxWidth:'800px',
            marginLeft:'163px',

           
           
          }}
        >
               
               <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 3 }}
              
        >
                <form width='100%'>
                

              <Typography align='left'> Name of Applicant 
              <Avatar><AccountCircleIcon/> </Avatar>
              <TextField  sx={{ float:'right', width:'10cm' }} 
                  required
                    marginTop='-22px'
                    id="nappli"  
                    name="nappli"
                    value={allvalues.nappli}
                     onChange={(e) => this.imageHandler(e)}
                    type="file "
                    variant="standard"
                    autoFocus
                    
                  /> 
                  
                 </Typography> <br />

                 <Typography style={{float:'left'}} component="h1" variant="h5">
                 About
                 </Typography><br /> <br />

                 <Typography sx={{ allign:'left' , marginLeft:14}}>Name
                  <Typography sx={{ float:'right', marginRight:14}} >
                  userkaname
                  </Typography>
                  </Typography><br />

                  <Typography sx={{ allign:'left' , marginLeft:14}}>Email
                  <Typography sx={{ float:'right', marginRight:14}} >
                  @useremail
                  </Typography>
                  </Typography><br />

                  <Typography sx={{ allign:'left' , marginLeft:14}}>Phone No 
                  <Typography sx={{ float:'right', marginRight:14}} >
                  1234567891
                  </Typography>
                  </Typography><br />

                  <Typography sx={{ allign:'left' , marginLeft:14}}>profession
                  <Typography sx={{ float:'right', marginRight:14}} >
                  EventOrganizer
                  </Typography>
                  </Typography><br />
                 </form>  
         </Box>
         </Box>
           
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
      </>

  )

}  
    