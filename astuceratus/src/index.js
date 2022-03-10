import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Pages/App';
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Rats from "./Pages/Rats";
import "./Styles/App.css";
import Navbar from './Components/Navbar/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="rats" element={<Rats />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
