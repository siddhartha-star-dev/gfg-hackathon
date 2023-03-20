import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Landing from './routes/landing';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/signin';
import SignUp from './routes/signup';
import Navbar from './components/navbar/navbar.jsx';
const  App=()=> {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route exact path='/signin' element={<SignIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
