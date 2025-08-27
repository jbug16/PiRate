import './styles/App.css';
import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import PlateTable from "./components/PlateTable";
import StatCard from './components/StatCard';

// Data
import platesData from './data/plates.json';

export default function App() {
    const [plates] = useState(platesData);
    const totalTickets = plates.reduce((sum, p) => sum + (p.tickets || 0), 0);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <SideBar
                pages={[
                    { label: "Dashboard", path: "/" },
                    { label: "Permits", path: "/permits" },
                    { label: "Customers", path: "/customers" },
                    { label: "Reports", path: "/reports" }
                ]}
            />

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Navbar */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Enter Scan Mode
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <StatCard title="Total Plates" value={plates.length} />
                    <StatCard title="Total Tickets" value={totalTickets} />
                </div>

                {/* Table */}
                <PlateTable plates={plates} />
            </div>
        </div>
    );
}