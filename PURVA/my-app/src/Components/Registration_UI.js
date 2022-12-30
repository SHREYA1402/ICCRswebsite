import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Link, Container, Checkbox, CssBaseline, TextField, FormControlLabel, Box, Button, Typography, FormControl } from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import useGeolocation from './useGeolocation'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Addmore from './Addmore'
// import { addEventUser } from "../../components/Api";
// import { makeStyles } from "@mui/material/styles";


// const useStyles = makeStyles((theme) => ({ 
//     formControl: {
//     margin: theme.spacing(1),
//      minwidth: 200
// }
// }))





function Copyright(props) {



    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();
export default function Registration() {
    const [allvalues, setAllvalues] = useState({
        ninfra: "",
        towner: "",
        norgan: "",
        status: "",
        eyear: "",
        nadmi: "",
        tinfra: "",
        nreg: "",
        otherinformation: "",
        address: "",
        address2: "",
        nhouse: "",
        Street: "",
        Landmark: "",
        Locality: "",
        pincode: "",
        state: "",
        district: "",
        subdistrict: "",
        city: "",
        cperson: "",
        designation: "",
        email: "",
        nfax: "",
        phoneno: "",
        aphoneno: "",
        glocation:false,
        password: "",
        cpassword: "",
        croom: "",


    });

    const location = useGeolocation();

    
    const onchangehandler = (e) => {
        setAllvalues({ ...allvalues, [e.target.name]: e.target.value });
    };

   
    const submitHandler = async (e) => {
        e.preventDefault();
        if (allvalues.password === allvalues.cpassword) {

            // await addEventUser(allvalues);
        }
        else {
            alert("Enter Password Correctly")
        }
        // window.location.href('/eventdashboard')
    };

    // const classes = useStyles()
    // const [value, setValue] = React.useState('')
    // const handlechange = (event) =>{
    //     setValue(event.target.value)}
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
                            padding: 10,
                            boxShadow: 3,

                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "#00a9cc", marginTop: -7 }}>
                            <AppRegistrationRoundedIcon />
                        </Avatar>
                        <Typography style={{ marginTop: -4 }} component="h1" variant="h5">
                            GROUND REGISRATION FORM
                        </Typography>
                        {/* <section className="mt-5">
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
                </section> */}
      <FormControl fullWidth>

                        <Box
                            component="form"
                            onSubmit={submitHandler}
                            noValidate
                            sx={{ mt: 3 }}

                        >
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="norgan"
                                        label="Name of Organization"
                                        value={allvalues.norgan}
                                        onChange={(e) => onchangehandler(e)}
                                        name="norgan"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputLabel id="demo-simple-select-label">Ownership Type</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="towner"
                                        value={allvalues.towner}
                                        label="Ownership Type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Central Government"}>Central Government</MenuItem>
                                        <MenuItem value={"Private / NGO"}>Private / NGO</MenuItem>
                                        <MenuItem value={"Sports Authority of India"}>Sports Authority of India</MenuItem>
                                        <MenuItem value={"State Government"}>State Government</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={4}>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="status"
                                        value={allvalues.status}
                                        label="Status"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Status</MenuItem>
                                        <MenuItem value={"Central Government"}>Company</MenuItem>
                                        <MenuItem value={"Firm"}>Firm</MenuItem>
                                        <MenuItem value={"Individual"}>Individual</MenuItem>
                                        <MenuItem value={"Non-profit organisation"}>Non-profit organisation</MenuItem>
                                        <MenuItem value={"Society"}>Society</MenuItem>
                                        <MenuItem value={"Trust"}>Trust</MenuItem>
                                    </Select>
                                </Grid>
                                {/* <FormControl className={classes.formcontrol}> */}
                                <Grid item xs={4}>
                                    <InputLabel id="demo-simple-select-label">Year of Establishment</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="eyear"
                                        value={allvalues.eyear}
                                        label="Year of Establishment"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={"1980"}>1980</MenuItem>
                                        <MenuItem value={"1981"}>1981</MenuItem>
                                        <MenuItem value={"1982"}>1982</MenuItem>
                                        <MenuItem value={"1983"}>1983</MenuItem>
                                        <MenuItem value={"1984"}>1984</MenuItem>
                                        <MenuItem value={"1985"}>1985</MenuItem>
                                        <MenuItem value={"1986"}>1986</MenuItem>
                                        <MenuItem value={"1987"}>1987</MenuItem>
                                        <MenuItem value={"1988"}>1988</MenuItem>
                                        <MenuItem value={"1989"}>1989</MenuItem>
                                        <MenuItem value={"1990"}>1990</MenuItem>
                                        <MenuItem value={"1991"}>1991</MenuItem>
                                        <MenuItem value={"1992"}>1992</MenuItem>
                                        <MenuItem value={"1993"}>1993</MenuItem>
                                        <MenuItem value={"1994"}>1994</MenuItem>
                                        <MenuItem value={"1995"}>1995</MenuItem>
                                        <MenuItem value={"1996"}>1996</MenuItem>
                                        <MenuItem value={"1997"}>1997</MenuItem>
                                        <MenuItem value={"1998"}>1998</MenuItem>
                                        <MenuItem value={"1999"}>1999</MenuItem>
                                        <MenuItem value={"2000"}>2000</MenuItem>
                                        <MenuItem value={"2001"}>2001</MenuItem>
                                        <MenuItem value={"2002"}>2002</MenuItem>
                                        <MenuItem value={"2003"}>2003</MenuItem>
                                        <MenuItem value={"2004"}>2004</MenuItem>
                                        <MenuItem value={"2005"}>2005</MenuItem>
                                        <MenuItem value={"2006"}>2006</MenuItem>
                                        <MenuItem value={"2007"}>2007</MenuItem>
                                        <MenuItem value={"2008"}>2008</MenuItem>
                                        <MenuItem value={"2009"}>2009</MenuItem>
                                        <MenuItem value={"2010"}>2010</MenuItem>
                                        <MenuItem value={"2011"}>2011</MenuItem>
                                        <MenuItem value={"2012"}>2012</MenuItem>
                                        <MenuItem value={"2013"}>2013</MenuItem>
                                        <MenuItem value={"2014"}>2014</MenuItem>
                                        <MenuItem value={"2015"}>2015</MenuItem>
                                        <MenuItem value={"2016"}>2016</MenuItem>
                                        <MenuItem value={"2017"}>2017</MenuItem>
                                        <MenuItem value={"2018"}>2018</MenuItem>
                                        <MenuItem value={"2019"}>2019</MenuItem>
                                        <MenuItem value={"2020"}>2020</MenuItem>
                                        <MenuItem value={"2021"}>2021</MenuItem>
                                        <MenuItem value={"2022"}>2022</MenuItem>


                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nadmi"
                                        label="Name of the Administrator"
                                        value={allvalues.nadmi}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nadmi"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                {/* </FormControl> */}
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Infrastructure type</InputLabel>
                                    <Select
                                        
                                        required
                                        fullWidth

                                        labelId="demo-simple-select-label"
                                        id="tinfra"
                                        value={allvalues.tinfra}
                                        label="Infrastructure type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Single-Facility"}>Single-Facility</MenuItem>
                                        <MenuItem value={"Multi-Facility"}>Multi-Facility</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nreg"
                                        label="Registration number"
                                        value={allvalues.nreg}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nreg"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="otherinformation"
                                        label="Other Information"
                                        value={allvalues.otherinformation}
                                        onChange={(e) => onchangehandler(e)}
                                        name="otherinformation"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>

                                
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">For Age Type</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="tage"
                                        value={allvalues.tage}
                                        label="Age Type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"all"}>All Age</MenuItem>
                                        <MenuItem value={"above"}>Above 18</MenuItem>
                                        <MenuItem value={"below"}>Below 18</MenuItem>

                                    </Select>
                                </Grid>

                                <Typography style={{ marginLeft: "20px", marginTop: "19px" }} component="h1" variant="h5">
                                    Address
                                </Typography>

                                <Grid item xs={6} sm={12}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        value={allvalues.address}
                                        onChange={(e) => onchangehandler(e)}
                                        name="address"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="address2"
                                        value={allvalues.address2}
                                        label=""
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select</MenuItem>
                                        <MenuItem value={"C/o"}>C/o</MenuItem>
                                        <MenuItem value={"D/o"}>D/o</MenuItem>
                                        <MenuItem value={"N/o"}>N/o</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nhouse"
                                        label="House/Plot/Building Number"
                                        value={allvalues.nhouse}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nhouse"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="Street"
                                        label="Street"
                                        value={allvalues.Street}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Street"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}   >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="Landmark"
                                        label="Landmark"
                                        value={allvalues.Landmark}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Landmark"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>


                                <Grid item xs={4}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="Locality"
                                        label="Locality"
                                        value={allvalues.Locality}
                                        onChange={(e) => onchangehandler(e)}
                                        name="Locality"

                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="pincode"
                                        label="Pincode"
                                        value={allvalues.pincode}
                                        onChange={(e) => onchangehandler(e)}
                                        name="pincode"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="state"
                                        label="State"
                                        value={allvalues.state}
                                        onChange={(e) => onchangehandler(e)}
                                        name="state"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="district"
                                        label="District"
                                        value={allvalues.district}
                                        onChange={(e) => onchangehandler(e)}
                                        name="district"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="subdistrict"
                                        label="Sub-District"
                                        value={allvalues.district}
                                        onChange={(e) => onchangehandler(e)}
                                        name="subdistrict"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="city"
                                        label="city"
                                        value={allvalues.city}
                                        onChange={(e) => onchangehandler(e)}
                                        name="city"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>



                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        value={allvalues.cperson}
                                        onChange={(e) => onchangehandler(e)}
                                        name="cperson"
                                        label="Contact Person"
                                        type="text"
                                        id="cperson"

                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="designation"
                                        label="Designation"
                                        value={allvalues.designation}
                                        onChange={(e) => onchangehandler(e)}
                                        name="designation"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        value={allvalues.email}
                                        onChange={(e) => onchangehandler(e)}
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nfax"
                                        label="Fax. Number"
                                        value={allvalues.nfax}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nfax"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="phoneno"
                                        label="Phone Number"
                                        value={allvalues.phoneno}
                                        onChange={(e) => onchangehandler(e)}
                                        name="phoneno"
                                        type="tel"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="aphoneno"
                                        label="Alternate Phone Number"
                                        value={allvalues.aphoneno}
                                        onChange={(e) => onchangehandler(e)}
                                        name="aphoneno"
                                        type="tel"
                                        autoFocus
                                    />
                                </Grid>
                                <Typography style={{ marginLeft: "20px", marginTop: "19px" }} component="h1" variant="h5">
                                    Location
                                </Typography>

                                <Grid item xs={12} >
                                    <FormControlLabel
                                        control={<Checkbox value={allvalues.glocation} onClick={allvalues.glocation=true} color="primary" />}
                                        label="Geographical location"
                                    />
                                </Grid>
                                <Button
                                    type="button"
                                    fullWidth
                                    onClick={
                                        location.loaded ? JSON.stringify(location) : "Location data not available yet"
                                    }
                                    variant="contained"
                                    sx={{ mt: 3, mb: 4 }}
                                >
                                    click here to get location
                                </Button>
                                <Addmore/><br />
                                
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Select the available facilities</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="tfacility"
                                        value={allvalues.tfacility}
                                        label="Select the available facilities"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Volleyball"}>Volleyball</MenuItem>
                                        <MenuItem value={"Cricket"}>Cricket</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nlans"
                                        label="Number of lanes"
                                        value={allvalues.nlans}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nlans"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="npitch"
                                        label="Number of Pitch"
                                        value={allvalues.npitch}
                                        onChange={(e) => onchangehandler(e)}
                                        name="npitch"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="ncoaches"
                                        label="Number of the coaches"
                                        value={allvalues.ncoaches}
                                        onChange={(e) => onchangehandler(e)}
                                        name="ncoaches"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="saccomo"
                                        label="Accomodation for Sportpersons"
                                        value={allvalues.saccomo}
                                        onChange={(e) => onchangehandler(e)}
                                        name="saccomo"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Food lit</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="flit"
                                        value={allvalues.flit}
                                        label="Food lit"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Disability friendly</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="dfriendly"
                                        value={allvalues.dfriendly}
                                        label="Disability friendly"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Sports for Women</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="swomen"
                                        value={allvalues.swomen}
                                        label="Sports for Women"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                {/* <FormControl className={classes.formcontrol}> */}
                                <Grid item xs={6} sm={3}>
                                    <InputLabel id="demo-simple-select-label">Year built</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="ybuilt"
                                        value={allvalues.ybuilt}
                                        label="Year built"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={1980}>1980</MenuItem>
                                        <MenuItem value={1981}>1981</MenuItem>
                                        <MenuItem value={1982}>1982</MenuItem>
                                        <MenuItem value={1983}>1983</MenuItem>
                                        <MenuItem value={1984}>1984</MenuItem>
                                        <MenuItem value={1985}>1985</MenuItem>
                                        <MenuItem value={1986}>1986</MenuItem>
                                        <MenuItem value={1987}>1987</MenuItem>
                                        <MenuItem value={1988}>1988</MenuItem>
                                        <MenuItem value={1989}>1989</MenuItem>
                                        <MenuItem value={1990}>1990</MenuItem>
                                        <MenuItem value={1991}>1991</MenuItem>
                                        <MenuItem value={1992}>1992</MenuItem>
                                        <MenuItem value={1993}>1993</MenuItem>
                                        <MenuItem value={1994}>1994</MenuItem>
                                        <MenuItem value={1995}>1995</MenuItem>
                                        <MenuItem value={1996}>1996</MenuItem>
                                        <MenuItem value={1997}>1997</MenuItem>
                                        <MenuItem value={1998}>1998</MenuItem>
                                        <MenuItem value={1999}>1999</MenuItem>
                                        <MenuItem value={2000}>2000</MenuItem>
                                        <MenuItem value={2001}>2001</MenuItem>
                                        <MenuItem value={2002}>2002</MenuItem>
                                        <MenuItem value={2003}>2003</MenuItem>
                                        <MenuItem value={2004}>2004</MenuItem>
                                        <MenuItem value={2005}>2005</MenuItem>
                                        <MenuItem value={2006}>2006</MenuItem>
                                        <MenuItem value={2007}>2007</MenuItem>
                                        <MenuItem value={2008}>2008</MenuItem>
                                        <MenuItem value={2009}>2009</MenuItem>
                                        <MenuItem value={2010}>2010</MenuItem>
                                        <MenuItem value={2011}>2011</MenuItem>
                                        <MenuItem value={2012}>2012</MenuItem>
                                        <MenuItem value={2013}>2013</MenuItem>
                                        <MenuItem value={2014}>2014</MenuItem>
                                        <MenuItem value={2015}>2015</MenuItem>
                                        <MenuItem value={2016}>2016</MenuItem>
                                        <MenuItem value={2017}>2017</MenuItem>
                                        <MenuItem value={2018}>2018</MenuItem>
                                        <MenuItem value={2019}>2019</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2022}>2022</MenuItem>


                                    </Select>
                                </Grid>

                                {/* </FormControl> */}
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Access type</InputLabel>
                                    <Select
                                        
                                        required
                                        fullWidth
                                        name="access"
                                        labelId="demo-simple-select-label"
                                        id="access"
                                        value={allvalues.access}
                                        label="Access type"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Selection"}>Selection</MenuItem>
                                        <MenuItem value={"Members"}>Members</MenuItem>
                                        <MenuItem value={"Guest"}>Guest</MenuItem>
                                        <MenuItem value={"Pay & Play"}>Pay & Play</MenuItem>
                                        <MenuItem value={"Others"}>Others</MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Membership</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="Membership"
                                        value={allvalues.Membership}
                                        label="Membership"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="mrestrict"
                                        label="Membership Restriction(if any)"
                                        value={allvalues.mrestrict}
                                        onChange={(e) => onchangehandler(e)}
                                        name="mrestrict"
                                        type="text"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Changing room</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="croom"
                                        value={allvalues.croom}
                                        label="Changing room"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>



                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Opening time</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="otime"
                                        value={allvalues.otime}
                                        label="Opening time"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Mon-fri</MenuItem>
                                        <MenuItem value={"No"}>Weekend</MenuItem>

                                    </Select>
                                </Grid>


                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Club</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="Club"
                                        value={allvalues.Club}
                                        label="Club"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Medical facility</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="mfaci"
                                        value={allvalues.mfaci}
                                        label="Medical facility"
                                        onChange={(e) => onchangehandler(e)}
                                    >
                                        <MenuItem value={""}>Select Type</MenuItem>
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>

                                    </Select>
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="ncourt"
                                        label="Number of court"
                                        value={allvalues.ncourt}
                                        onChange={(e) => onchangehandler(e)}
                                        name="ncourt"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nball"
                                        label="Number of ball"
                                        value={allvalues.nball}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nball"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="nnet"
                                        label="Number of net"
                                        value={allvalues.nnet}
                                        onChange={(e) => onchangehandler(e)}
                                        name="nnet"
                                        type="number"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={3}  >
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        id="tcourt"
                                        label="Type of court"
                                        value={allvalues.tcourt}
                                        onChange={(e) => onchangehandler(e)}
                                        name="tcourt"
                                        type="text"
                                        autoFocus
                                    />
                                     </Grid>
    

                                     <Typography style={{ marginLeft: "20px", marginTop: "19px" }} component="h1" variant="h5">
                                    Password
                                </Typography>
                                <Grid item xs={12}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        value={allvalues.password}
                                        onChange={(e) => onchangehandler(e)}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        
                                        required
                                        fullWidth
                                        value={allvalues.cpassword}
                                        onChange={(e) => onchangehandler(e)}
                                        name="cpassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="cpassword"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                </Grid>

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"I agree to Terms and Conditions"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        </FormControl>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </>
    );
}