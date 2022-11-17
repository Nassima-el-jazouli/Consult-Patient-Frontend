import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react'
import LandingPage from './components/Landing Page/LandingPage';
import Plans from './components/Landing Page/Plans';
import Services from './components/Landing Page/Services';
import ContactUs from './components/Landing Page/ContactUs';
import ConsultPatient from './components/Consult Patient/ConsultPatient';
import PageLayout from './components/Landing Page/PageLayout';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<PageLayout />}>
            <Route exact default path="" element={<LandingPage />}/>
            <Route exact path="plans" element={<Plans />}/>
            <Route exact path="services" element={<Services />}/>
            <Route exact path="ContactUs" element={<ContactUs />}/>
            <Route exact path="consult" element={<ConsultPatient />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
