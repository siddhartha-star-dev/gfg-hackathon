import Typewriter from "../components/typewriter/Typewriter";
import Img1 from "../assets/2203_w037_n003_236a_p1_236-removebg-preview.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      {/* <Navbar/> */}
      {/* <div className="flex flex-col items-center mx-12">
        <div className="text-3xl font-semibold mt-20  text-center leading-snug text-gray-700 mb-8">Your <span className="text-[#cc29ff] text-4xl">Health Vault</span> is Ready.</div>
  
        <div className="h-24 md:h-8">
        <Typewriter strings={['A Next Gen Digital Health Record Platform']} colors={['black']} typeSpeed={50} startDelay={10} backSpeed={30} backDelay={1000} color={'#374151'} />
        </div>
        <div><img src={Img1} alt="" className="h-40"/></div>
        <button className="text-2xl text-gray-700 font-semibold rounded-[2rem] border-2 px-8 py-3 mt-8 border-gray-800 hover:bg-[#854997] hover:text-white hover:border-[#cc29ff]">Sign In</button>
        </div> */}
      <div className="flex flex-col items-center md:flex-row  md:items-start mx-12 md:mt-20 mt-16">
        <div className="md:w-1/2 md:flex md:flex-col md:items-start md:pl-16 ">
          <div className="text-3xl font-semibold mt-20  text-center md:text-start leading-snug text-gray-700 mb-8 md:text-4xl md:leading-normal">
            Your{" "}
            <span className="text-[#cc29ff] text-4xl font-bold">
              Health Vault
            </span>
            <br /> is Ready
          </div>
          <div className="h-24 md:h-24 md:pr-28 text-gray-400">
            <Typewriter
              strings={["A Next Generation Digital Health Record Platform"]}
              colors={["black"]}
              typeSpeed={50}
              startDelay={10}
              backSpeed={30}
              backDelay={1000}
              color={"#374151"}
            />
          </div>
          <Link to="/signin">
            <button className="text-xl text-gray-700 font-semibold rounded-[2rem] border-2 px-5 py-2 mt-12 border-gray-400 hover:border-gray-800 hidden  md:flex">
              <span className="mr-2">
                <img src="https://img.icons8.com/material-outlined/24/null/import.png" />
              </span>{" "}
              Sign In Now
            </button>
          </Link>
          <Link to="/doctorlogin">
            <button className="text-xl text-gray-700 font-semibold rounded-[2rem] border-2 px-5 py-2 mt-12 border-gray-400 hover:border-gray-800 hidden  md:flex">
              <span className="mr-2">
                <img src="https://img.icons8.com/material-outlined/24/null/import.png" />
              </span>{" "}
              Sign In As Doctor
            </button>
          </Link>
          {/* <p>etsrdtfjgk</p>
          <Link to="/doctorlogin">
            <button className="text-xl text-gray-700 font-semibold rounded-[2rem] border-2 px-7 py-2 mt-16 border-gray-400 hover:border-gray-800  md:hidden flex gap-2">
              <span>
                <img src="https://img.icons8.com/material-outlined/24/null/import.png" />
              </span>{" "}
              Sign In As Doctor
            </button>
          </Link> */}
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img src={Img1} alt="" className="mt-10 md:mt-14" />
          </div>
          <Link to="/signin">
            <button className="text-xl text-gray-700 font-semibold rounded-[2rem] border-2 px-7 py-2 mt-16 border-gray-400 hover:border-gray-800  md:hidden flex gap-2">
              <span>
                <img src="https://img.icons8.com/material-outlined/24/null/import.png" />
              </span>{" "}
              Sign In Now
            </button>
          </Link>
          <Link to="/doctorlogin">
            <button className="text-xl text-gray-700 font-semibold rounded-[2rem] border-2 px-7 py-2 mt-16 border-gray-400 hover:border-gray-800  md:hidden flex gap-2">
              <span>
                <img src="https://img.icons8.com/material-outlined/24/null/import.png" />
              </span>{" "}
              Sign In As Doctor
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
