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
import Successstory_Offshore from './Successstory_Offshore Crude Mixing Control System.js';
import Successstory_USS from './Successstory_USS Nassau Ship Monitoring System';
import Aboutus from './Aboutus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Routes>
    <Route path="/SSAC" element={<App />}/>
    <Route path=":Success" element={<Success />}/>
    <Route path=":Success/Successstory/Offshore_Crude_Mixing" element={<Successstory_Offshore />} />
    <Route path=":Success/Successstory/USS_Nassau_Ship" element={<Successstory_USS/>} />
    <Route path="/" element={<App />} />
    <Route path="/Services" element={<Services />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
