import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ImageUploader from '../components/imageUpload';
import { useState } from 'react';
import axios from 'axios';
import { SentimentDissatisfied } from '@mui/icons-material';
const BACKEND_URL = 'http://34.131.196.228/api/addImageToDB';

export default function Previousinfo() {
  const [data, setData] = useState({
    image_url: "",
    category: "",
    dd: '',
    mm: '',
    yy: ''
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log({ ...data, [name]: value });
  }

  return (
    <>
      <Paper elevation={10} className='mt-28 w-1/2 mx-auto py-8 px-12'>
        <div className='mb-8  text-3xl font-semibold'>
          Patient Previous Record
        </div>
        <Grid container spacing={4}>
          <ImageUploader setData={setData} data={data} />

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of visit"
                format="DD - MM - YYYY"
                onChange={(newValue) => {
                  let dateStamp = new Date(newValue);
                  console.log(dateStamp.getFullYear());
                  setData({ ...data, dd: dateStamp.getDate(), mm: dateStamp.getMonth(), yy: dateStamp.getFullYear() })
                }}
              />
            </LocalizationProvider>

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="category"
              name="category"
              label="Category"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={data.category}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
          <Button variant='contained' sx={{ marginTop: '10px', marginX: 'auto' }} onClick={async (e) => {
            e.preventDefault();
            // console.log(data);
            const email = JSON.parse(localStorage['data']).data.email;
            const res = await axios.post(BACKEND_URL, { ...data, email: email });
            // console.log({...data,email:email});
          }}>SUBMIT</Button>
        </Grid>
      </Paper>

    </>
  );
}