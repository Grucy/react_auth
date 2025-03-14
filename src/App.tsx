import React from 'react';
import './App.css';
import { Register } from './components/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
