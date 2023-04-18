import React, { useEffect, useState } from "react";
import JsPDF from "jspdf";
import { useLocation } from "react-router-dom";

const Prescription = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.d);

  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  //   const { date, category, doctorName, diagnosis, medicines, dosages } = location.state.d;
  return (
    <div id="report">
      <div className="flex items-center justify-center mt-24">
        {!data.image_url ? (
          <div className="w-[90%] md:w-[40%] text-gray-700 shadow-lg rounded-lg ">
            <div className="text-3xl px-8 py-5 bg-[#386aa4] tracking-wide rounded-t-lg font-medium text-gray-50">
              PRESCRIPTION
            </div>
            <div className="flex justify-between font-medium mx-8">
              <div className="text-2xl tracking-wide font-medium mt-5 text-[#386aa4]">
                Dr. {data.name_of_doctor}
              </div>
              <div className="text-xl mt-5">
                {data.date.day}/{data.date.month}/{data.date.year}
              </div>
            </div>
            <hr class="h-px my-5 bg-gray-300 border-0 mx-5"></hr>
            <div className="flex mx-8 gap-12">
              <div className="text-lg font-medium">Diagonosis :</div>
              <div>{data.diagnosis}</div>
            </div>
            <hr class="h-px my-5 bg-gray-300 border-0 mx-5"></hr>
            <div className="flex mx-8 gap-12 items-center">
              <div className="text-lg font-medium">Medicines&nbsp; :</div>
              <ul className="list-disc">
                {data.medicine.map((item, i) => {
                  return (
                    <li className="flex gap-4 ">
                      <div>{item.medicine}</div>
                      <div>{item.dosage}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-5 py-4 bg-[#386aa4] text-gray-50 rounded-b-lg mt-5">
              Thank You for Visiting Us!!
            </div>
            <button
              onClick={() => {
                window.print();
              }}
              type="button"
            >
              Export PDF
            </button>
          </div>
        ) : (
          <div>
            <img src={data.image_url} className="h-[1/2]"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescription;
