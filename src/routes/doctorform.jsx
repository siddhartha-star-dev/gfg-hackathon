import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Theme, useTheme } from "@mui/material/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const names = ["Morning", "Afternoon", "Evening"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function Doctorform() {
  const navigate = useNavigate();
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60 * 1000; // Get local timezone offset in milliseconds
  const ISTOffset = 5.5 * 60 * 60 * 1000; // Offset for Indian Standard Time (5 hours 30 minutes) in milliseconds
  const IST = new Date(now.getTime() + offset + ISTOffset);

  const day = IST.getDate();
  const month = IST.getMonth() + 1; // Months are zero-based
  const year = IST.getFullYear();

  // console.log(day, month, year);

  const theme = useTheme();
  const [data, setData] = useState({
    name_of_doctor: "",
    category: "",
    medicine: [],
    day: day,
    month: month,
    year: year,
    diagnosis:"",
    userid: JSON.parse(localStorage['data']).data._id,
    code:JSON.parse(localStorage['data']).data.code,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  // const [medicines,setMedicines] = useState([]);
  const [medicineInfo, setMedicineInfo] = useState({
    medicine: "",
    dosage: "",
  });

  const handlenputChange = (e) => {
    const { name, value } = e.target;
    setMedicineInfo({ ...medicineInfo, [name]: value });
  };
  return (
    <Paper elevation={10} className="mt-28 w-1/2 mx-auto py-8 px-12">
      <div className="mb-8  text-3xl font-semibold">Doctor Form</div>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name_of_doctor"
            name="name_of_doctor"
            label="Name of doctor"
            onChange={(e) => {
              handleChange(e);
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
            onChange={(e) => {
              handleChange(e);
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
            onChange={(e) => {
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
            onChange={(e) => {
              handlenputChange(e);
            }}
            value={medicineInfo.dosage}
          />
        </Grid>
       
        <Grid item xs={12} sm={4}>
          <button
            className="mt-5 ml-4"
            onClick={(e) => {
              e.preventDefault();
              setData({ ...data, medicine: [...data.medicine, medicineInfo] });
              setMedicineInfo({ medicine: "", dosage: "" });
            }}
          >
            <AddBoxIcon />
          </button>
        </Grid>
        <div className="ml-12 mt-2">
          {data.medicine.map((item, i) => (
            <p>
              <ul className="list-disc">
                <li className="mt-3">
                  <Chip label={item.medicine} />
                  <Chip label={item.dosage} sx={{ ml: 2 }} />
                </li>
              </ul>
            </p>
          ))}
        </div>
        <Grid item xs={12}>
          <TextField
            required
            id="diagnosis"
            name="diagnosis"
            label="diagnosis"
            fullWidth
            variant="standard"
            onChange={(e) => {
              handleChange(e);
            }}
            value={data.diagnosis}
          />
        </Grid>
      </Grid>
      <button
      className="rounded-full text-gray-100 px-5 py-2 bg-[#5A0C97] drop-shadow-md mt-8 mb-5 "
        onClick={async (e) => {
          e.preventDefault();
          // console.log(JSON.parse(localStorage['data']).data._id);
          console.log(data);
          const resp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/newuserinfo`,data);
          console.log(resp);
          alert(resp.data.message)
          if(resp.data.message==="Patient has destroyed otp")
          {
            localStorage.clear();
            setTimeout(()=>{

              navigate('/');
            },1000);
          }
          // setTimeout(()=>{
          //   window.location.reload();
          // },2000);
        }}
      >
        Submit
      </button>
    </Paper>
  );
}
