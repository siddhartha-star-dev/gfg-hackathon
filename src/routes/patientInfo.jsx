// const PatientInfo = ()=>{
//     return(
//         <>
//         <div className="mt-20">hi</div>
//         </>
//     )
// }

// export default PatientInfo;

import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "../components/Searchbar";
import JsPDF from "jspdf";

const PatientInfo = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchstring, setSearchField] = useState("");
  const user = localStorage["data"];
  const [prev, setPrev] = useState([]);
  const [newRecords, setNewRecords] = useState([]);

  const [filteredmonster, setFilteredMonster] = useState(
    visible ? prev : newRecords
  );
  // const ref = useRef(null);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    const fun = async () => {
      const userid = JSON.parse(user).data?._id;
      const resp = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/getpatientinfo`,
        { userid }
      );
      setPrev(resp.data.prev_records);
      setNewRecords(resp.data.new_records);
    };
    fun();
  }, []);
  useEffect(() => {
    const newfilteredRecords = (visible ? prev : newRecords).filter(
      (monster) => {
        return monster.category?.toLowerCase().includes(searchstring);
      }
    );
    setFilteredMonster(newfilteredRecords);
  }, [prev, searchstring, visible]);

  const onsearchchange = (event) => {
    const searchfieldstring = event.target.value.toLowerCase();
    setSearchTerm(event.target.value);
    setSearchField(searchfieldstring);
    console.log(prev);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };

  return (
    <>
      <Stack className="mt-20 ml-14" spacing={4} direction="row">
        {/* <Link to="/previousinfo">
          <Button variant="contained">previous info</Button>
        </Link> */}
        <Link to="/doctorform">
          <Button variant="contained">doctor form</Button>
        </Link>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            setSearchTerm("");
            setSearchField("");
            setVisible(false);
          }}
        >
          New records
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            setSearchTerm("");
            setSearchField("");
            e.preventDefault();
            setVisible(true);
          }}
        >
          Prev records
        </Button>
        {/* <Button
          variant="contained"
          onClick={async (e) => {
            e.preventDefault();
            const res = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/generateOTP`,
              { userid: JSON.parse(user).data._id }
            );
            setOtp(res.data.otp);
            toast.success(res.data.message);
            console.log(res);
          }}
        >
          Generate OTP
        </Button> */}
        {/* {otp && (
          <div>
            <span className="mx-3">{otp}</span>
            <Button
              variant="contained"
              onClick={async (e) => {
                const res = await axios.post(
                  `${process.env.REACT_APP_BACKEND_URL}/destroyotp`,
                  { userid: JSON.parse(user).data._id }
                );
                console.log(res);
                setOtp(null);
              }}
            >
              Destroy OTP
            </Button>
          </div>
        )} */}
      </Stack>
      <Searchbar searchTerm={searchTerm} onChangeHandler={onsearchchange} />
      <ToastContainer autoClose={500} hideProgressBar={true} />
      <div className="flex flex-wrap gap-12 p-10 items-center justify-center text-gray-600">
        {filteredmonster.map((d, i) => {
          let date = d.date;
          return (
            <div key={i} className="w-[20rem]">
              <Paper className="" elevation={15}>
                <div>
                  <img src={d.image_url} alt="" className="rounded-t-md" />
                </div>
                <div className="p-6">
                  {/* <div>Disease: {d.disease}</div> */}
                  <div className="flex gap-3">
                    <div className="text-lg font-medium">Category:</div>{" "}
                    {d.category}{" "}
                  </div>
                  <div className="flex gap-3 mt-2">
                    <div className="text-lg font-medium">Date:</div>
                    {date.day}/{date.month}/{date.year}
                  </div>
                </div>
                <Link to={`/report/${d._id}`} state={{ d }}>
                  <button className="rounded-full text-gray-100 px-5 py-2 bg-[#5A0C97] drop-shadow-md text-sm mx-6 mb-5">
                    Read more
                  </button>
                </Link>
              </Paper>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default PatientInfo;
// "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
