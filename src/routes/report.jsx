// import { Paper } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Report = () => {
//   const location = useLocation();
//   const [d,setD] = useState(location.state.d);
//   useEffect(() => {
//     console.log(d);
//   }, []);
//   return (
//     <>

//     </>
//   );
// };

// export default Report;

import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useLocation } from "react-router-dom";

const Prescription = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.d);
  useEffect(() => {
    console.log(data);
  }, [data]);
  //   const { date, category, doctorName, diagnosis, medicines, dosages } = location.state.d;
  return (
    <div className="flex items-center justify-center h-screen">
      {!data.image_url ? (
        <Card variant="outlined">
          <CardContent>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h5" component="h2" gutterBottom>
              Doctor's Prescription
            </Typography>
            <Typography variant="body1" gutterBottom>
              Date:{" "}
              <span style={{ fontWeight: "bold" }}>
                {data.date.day}-{data.date.month}-{data.date.year}
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category:{" "}
              <span style={{ fontWeight: "bold" }}>{data.category}</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Doctor's Name:{" "}
              <span style={{ fontWeight: "bold" }}>{data.name_of_doctor}</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Diagnosis:{" "}
              <span style={{ fontWeight: "bold" }}>{data.diagnosis}</span>
            </Typography>
            <ul className="list-disc">
              Medicines:
              {data.medicine.map((item, i) => {
                return (
                  <li key={i}>
                    <Typography variant="body1" gutterBottom>
                      Medicine:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {item.medicine}
                      </span>{" "}
                      &nbsp; Dosage:{" "}
                      <span style={{ fontWeight: "bold" }}>{item.dosage}</span>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <div>
          <img src={data.image_url} className="h-1000 w-1000"></img>
        </div>
      )}
    </div>
  );
};

export default Prescription;
