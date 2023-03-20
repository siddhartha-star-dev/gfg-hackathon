import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
export default function Previousinfo() {
  return (
    <Paper elevation={10} className='mt-32 w-1/2 mx-auto p-8'>
      <div className='mb-10  text-3xl font-semibold'>
        Patient Previous Record
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
              <MenuItem value='M'>Male</MenuItem>
              <MenuItem value='F'>Female</MenuItem>
              <MenuItem value='PNS'>Prefer Not to Say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <div className='mt-10 '>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
       </div>
       <Grid item xs={12} sm={6}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="bloodGroup"
            name="bloodGroup"
            label="BloodGroup"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="height"
            name="height"
            label="Height"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="weight"
            name="weight"
            label="Weight"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
        <div className='mt-10 ml-10  '>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
       </div>
        </Grid>
       
      </Grid>
    </Paper>
  );
}