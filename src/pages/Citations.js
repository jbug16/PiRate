import '../styles/App.css';
import React from "react";
import citationsData from "../data/citations.json";

export default function Citations() {
    // Import data from JSON file
    const { citations } = citationsData;

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Citations</h1>
                        <p className="text-gray-600">Manage parking citations</p>
                    </div>

                    {/* Citations Table */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plate</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Violation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Officer</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {citations.map((citation) => (
                                        <tr key={citation.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{citation.plate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{citation.violation}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{citation.officer}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{citation.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    citation.status === 'Active' 
                                                        ? 'bg-red-100 text-red-800' 
                                                        : citation.status === 'Paid'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {citation.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{citation.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="text-red-600 hover:text-red-900 mr-3">Edit</button>
                                                <button className="text-blue-600 hover:text-blue-900">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}