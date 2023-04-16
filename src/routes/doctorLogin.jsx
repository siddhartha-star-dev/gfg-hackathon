import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { Box, Typography, Container,Button, Avatar, TextField, Checkbox,FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/verifyOTP`;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function DoctorSignIn() {
  const navigate = useNavigate();

    const [data, setData] = useState({
        email:"",
        otp:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
  const handleSubmit = async(event) => {
    try{
      event.preventDefault();
    console.log(data);
    const res = await axios.post(BACKEND_URL,data);
    const userData = res.data;
    localStorage['data'] = JSON.stringify(userData);
    toast.success(res.data.message);
    setTimeout(()=>{
      navigate('/patientInfo');
    },800)
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='mt-32'>
      <ToastContainer autoClose={500}/>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{
                handleChange(e)
              }}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="otp"
              label="OTP"
              
              id="otp"
            //   autoComplete="current-password"
              onChange={(e)=>{
                handleChange(e)
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={(e)=>{
                handleSubmit(e)
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}