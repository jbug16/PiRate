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
                    <h1 className="text-3xl font-bold">Permits</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        + Add Permit
                    </button>
                </div>
            </div>
        </div>
    );
}