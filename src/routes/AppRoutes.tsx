import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import Settings from "../pages/Settings.tsx";


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
