import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home.js';
import Projects from '../Components/Projects.js';
import About from '../Components/About.js';
import Experince from '../Components/Experince.js';
import Contacts from '../Components/Contacts.js';
import Education from '../Components/Education.js';
import TeachnologyStack from '../Components/TeachnologyStack.js';
import DashBord from '../Components/DashBord.js';

const AppRoutes = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experince" element={<Experince/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/teachnologyStack" element={<TeachnologyStack/>}/>
        <Route path="/Dashborad" element={<DashBord/>}/>


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;  
