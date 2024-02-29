import logo from './logo.svg';
import './App.css';
import { Login } from './Login/Login';
import { Pages } from './Pages/Pages';
import { Navigate, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Button } from '@mui/material'
function App() {
  return (
  <div>
    <Button variant="outlined">Outlined</Button>
   <Routes>
    <Route path="/" element={<Navigate to="Login"/>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/pages" element={<Pages></Pages>}></Route>
   </Routes>
   </div>
  );
}

export default App;
