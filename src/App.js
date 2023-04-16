import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Landing from "./routes/landing";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import Navbar from "./components/navbar/navbar.jsx";
import Previousinfo from "./routes/previousinfo.jsx";
import Home from "./routes/home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Doctorform from "./routes/doctorform";
import DoctorSignIn from "./routes/doctorLogin";
import PatientInfo from "./routes/patientInfo";
import Report from "./routes/report";
import Prevreport from "./routes/prevreport";

const App = () => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/previousinfo" element={<Previousinfo />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/doctorform" element={<Doctorform />} />
          <Route exact path="/doctorlogin" element={<DoctorSignIn />} />
          <Route exact path="/patientinfo" element={<PatientInfo />} />
          <Route path="/report/:id" element={<Report />} />
          {/* <Route path="/report/:id" element={<Prevreport />} /> */}
        </Routes>
      </LocalizationProvider>
    </>
  );
};

export default App;
