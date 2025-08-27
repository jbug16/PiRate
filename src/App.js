import './styles/App.css';
import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Permits from "./pages/Permits";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";

function App() {
    const navLinks = [
        { label: "Dashboard", path: "/" },
        { label: "Permits", path: "/permits" },
        { label: "Customers", path: "/customers" },
        { label: "Reports", path: "/reports" },
    ];

    return (
        <div className="flex">
            <SideBar links={navLinks} />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/permits" element={<Permits />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;