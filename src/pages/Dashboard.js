import '../styles/App.css';
import React from "react";
import { Link } from "react-router-dom";
import dashboardData from "../data/dashboard.json";

export default function Dashboard() {
    // Import data from JSON file
    const { officers: officersData, recentCitations, recentAppeals, lots: lotsData } = dashboardData;
    
    const maxCitations = Math.max(...officersData.map(o => o.citations));

    const [selectedLot, setSelectedLot] = React.useState(lotsData[0]);
    const lotOccupancy = selectedLot;

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content - 2x2 Grid */}
            <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                    {/* Top Left - Citations Per Officer */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Citations Per Officer</h3>
                            <div className="text-sm text-gray-500">This Week</div>
                        </div>
                        <div className="space-y-5">
                            {officersData.map((officer, index) => (
                                <div key={index} className="flex items-center justify-between group">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                            <span className="text-xs font-medium text-gray-600">{officer.name.charAt(0)}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{officer.name}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-40 bg-gray-100 rounded-full h-3 relative overflow-hidden">
                                            <div 
                                                className={`${officer.color} h-3 rounded-full transition-all duration-500 ease-out`}
                                                style={{ width: `${(officer.citations / maxCitations) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900 w-8 text-right">{officer.citations}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>Total Citations: {officersData.reduce((sum, officer) => sum + officer.citations, 0)}</span>
                                <span>Avg per Officer: {Math.round(officersData.reduce((sum, officer) => sum + officer.citations, 0) / officersData.length)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Top Right - Lot Occupancy */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Lot Occupancy</h3>
                            <div className="text-sm text-gray-500">Updated {lotOccupancy.lastUpdated}</div>
                        </div>
                        <div className="flex items-center justify-center h-48 relative">
                            {/* Pie Chart Simulation */}
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                                <div 
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-600"
                                    style={{
                                        background: `conic-gradient(from 0deg, #ef4444 0deg ${(lotOccupancy.occupied / lotOccupancy.total) * 360}deg, #f3f4f6 ${(lotOccupancy.occupied / lotOccupancy.total) * 360}deg 360deg)`
                                    }}
                                ></div>
                                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">{lotOccupancy.occupied}%</div>
                                        <div className="text-xs text-gray-500">Occupied</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-center mb-3">
                                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                                    {lotsData.map((lot) => (
                                        <button
                                            key={lot.id}
                                            onClick={() => setSelectedLot(lot)}
                                            className={`px-2 py-1 text-xs rounded-md transition-colors ${
                                                selectedLot.id === lot.id
                                                    ? 'bg-white text-gray-900 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        >
                                            {lot.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-6 text-sm">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-gray-600">{lotOccupancy.occupied} occupied</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <span className="text-gray-600">{lotOccupancy.available} available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left - Recent Citations */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Recent Citations</h3>
                            <Link to="/citations" className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</Link>
                        </div>
                        <div className="space-y-2">
                            {recentCitations.map((citation) => (
                                <div key={citation.id} className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors h-12">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-red-600">#{citation.id}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{citation.plate}</div>
                                            <div className="text-xs text-gray-500">{citation.violation}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">{citation.time}</div>
                                        <div className="text-xs text-gray-600">by {citation.officer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Right - Recent Appeals */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">Recent Appeals</h3>
                            <Link to="/appeals" className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</Link>
                        </div>
                        <div className="space-y-2">
                            {recentAppeals.map((appeal) => (
                                <div key={appeal.id} className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors h-12">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-blue-600">#{appeal.id}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{appeal.plate}</div>
                                            <div className="text-xs text-gray-500">{appeal.appellant}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">{appeal.date}</div>
                                        <div className="text-xs text-gray-600">{appeal.amount}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}