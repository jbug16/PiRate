import '../styles/App.css';
import React, { useState } from "react";

// Components
import PlateTable from "../components/PlateTable";
import StatCard from '../components/StatCard';

import platesData from '../data/plates.json';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Navbar */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Reports</h1>
                </div>
            </div>
        </div>
    );
}