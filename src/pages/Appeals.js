import '../styles/App.css';
import React from "react";
import appealsData from "../data/appeals.json";

export default function Appeals() {
    // Import data from JSON file
    const { appeals } = appealsData;

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appeals</h1>
                        <p className="text-gray-600">Review and manage citation appeals submitted by customers</p>
                    </div>

                    {/* Appeals Table */}
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Citation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plate</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appellant</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Violation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {appeals.map((appeal) => (
                                        <tr key={appeal.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appeal.citationId}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appeal.plate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appeal.appellant}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appeal.violation}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appeal.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    appeal.status === 'Approved' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : appeal.status === 'Denied'
                                                        ? 'bg-red-100 text-red-800'
                                                        : appeal.status === 'Under Review'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {appeal.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appeal.submittedDate}</td>
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