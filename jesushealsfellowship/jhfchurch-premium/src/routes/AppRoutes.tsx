import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Worship from '../pages/Worship';
import Testimonies from '../pages/Testimonies';
import Prayer from '../pages/Prayer';
import Contact from '../pages/Contact';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/worship" element={<Worship />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;