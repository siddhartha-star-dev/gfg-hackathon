import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Theme, useTheme } from '@mui/material/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Chip from '@mui/material/Chip';
import {useState} from 'react';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Morning',
  'Afternoon',
  'Evening'
];

function getStyles(name, personName ,theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function Doctorform() {
    const theme = useTheme();
    const [data, setData] = useState({
      name_of_doctor:'',
      category:'',
      medicine:[]
    })

  const handleChange = (event) => {
      const {name, value} = event.target;
    setData({...data, [name]:value});
  };

// const [medicines,setMedicines] = useState([]);
const [medicineInfo,setMedicineInfo] = useState({
  medicine:"",
  dosage:"",
});

const handlenputChange = (e)=>{
  const {name,value} = e.target;
setMedicineInfo({...medicineInfo,[name]:value});
}
    return (
      <Paper elevation={10} className='mt-28 w-1/2 mx-auto py-8 px-12'>
        <div className='mb-8  text-3xl font-semibold'>
          Doctor Form
        </div>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name_of_doctor"
              name="name_of_doctor"
              label="Name of doctor"
              onChange={(e)=>{
                handleChange(e)
              }}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
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
              onChange={(e)=>{
                handleChange(e)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="medicine"
              name="medicine"
              label="medicine"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={(e)=>{
                handlenputChange(e);
              }}
              value={medicineInfo.medicine}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="dosage"
              name="dosage"
              label="dosage"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={(e)=>{
                handlenputChange(e);
              }}
              value={medicineInfo.dosage}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <button className='mt-5 ml-4' onClick={(e)=>{
            // setMedicines([...medicines,medicineInfo]);
            setData({...data, medicine:[...data.medicine,medicineInfo]});
            console.log({...data, medicine:[...data.medicine,medicineInfo]})
            setMedicineInfo({medicine:"",dosage:"",})
        }}><AddBoxIcon/></button>
        </Grid>
          <div className='ml-12 mt-2'>
        {
          data.medicine.map((item,i)=>(<p>
            <ul className='list-disc'>
              <li className='mt-3'> 

              <Chip label={item.medicine}/>
              <Chip label={item.dosage} sx={{ml:2}}/>
              
                </li>
        
            </ul>
           </p>))
        }
        </div>
{/*         
          <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            label="Date of visit"
            />
          </LocalizationProvider>
          </Grid> */}
          
         
        </Grid>
      </Paper>
    );
  }