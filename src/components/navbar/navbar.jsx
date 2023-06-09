// import Logo from "../assets/Group 82.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import './navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const user = (localStorage['data'])?(JSON.parse(localStorage['data'])?.data):null;
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const changeBackground = ()=>{
    if(window.scrollY >=25){
      setNav(true)
    }else{
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <nav className={nav? 'navbar active':'navbar'}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex ml-4 items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="flex gap-1 text-2xl font-bold">
                {/* <img src={Logo} alt="" style={{ height: "2rem" }} /> */}

                MAP<span className="text-[#5a0c97] ml-1">MY HEALTH</span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-4 text-sm font-medium md:flex md:space-x-9 md:space-y-0 px-5">
             
              {user && <li className="text-gray-700 hover:text-blue-600 ">
              <a href="/home"> <AccountCircleIcon/> Profile</a>
              </li>}
              {user && <li className="text-gray-700 hover:text-blue-600 ">
              <a onClick={()=>{
                localStorage.clear();
                navigate('/');
              }}><LogoutIcon/> Logout </a>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
