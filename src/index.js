import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import './index.css';
import App from './App';
import Success from './Success';
import reportWebVitals from './reportWebVitals';
import Services from './Services.js'
import Servicescta from './Servicescta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path="/SSAC" element={<App />} />
    <Route path="/" element={<App />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Success" element={<Success />} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
