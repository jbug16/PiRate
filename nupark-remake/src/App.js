import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import PlateTable from "./components/PlateTable";

export default function App() {
    const [plates] = useState([
        { number: "ABC123", owner: "John Doe", status: "Active" },
        { number: "XYZ789", owner: "Jane Smith", status: "Expired" },
        { number: "LMN456", owner: "Chris Johnson", status: "Pending" }
    ]);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-xl p-4">
                <h2 className="text-2xl font-bold mb-6">NuPark Remake</h2>
                <ul className="space-y-3">
                    <li className="text-lg hover:text-blue-600 cursor-pointer">Dashboard</li>
                    <li className="text-lg hover:text-blue-600 cursor-pointer">Permits</li>
                    <li className="text-lg hover:text-blue-600 cursor-pointer">Customers</li>
                    <li className="text-lg hover:text-blue-600 cursor-pointer">Reports</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Navbar */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">License Plate Dashboard</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        + Add Permit
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h3 className="text-gray-500">Total Plates</h3>
                        <p className="text-3xl font-bold">{plates.length}</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h3 className="text-gray-500">Active Permits</h3>
                        <p className="text-3xl font-bold">
                            {plates.filter((p) => p.status === "Active").length}
                        </p>
                    </div>
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h3 className="text-gray-500">Expired Permits</h3>
                        <p className="text-3xl font-bold">
                            {plates.filter((p) => p.status === "Expired").length}
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded-xl p-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr>
                            <th className="border-b p-3">Plate Number</th>
                            <th className="border-b p-3">Owner</th>
                            <th className="border-b p-3">Permit Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {plates.map((plate, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 border-b">{plate.number}</td>
                                <td className="p-3 border-b">{plate.owner}</td>
                                <td
                                    className={`p-3 border-b font-semibold ${
                                        plate.status === "Active"
                                            ? "text-green-600"
                                            : plate.status === "Expired"
                                                ? "text-red-600"
                                                : "text-yellow-600"
                                    }`}
                                >
                                    {plate.status}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}