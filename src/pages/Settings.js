import '../styles/App.css';
import React from "react";

export default function Settings() {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                        <p className="text-gray-600">Manage your application preferences and system configuration</p>
                    </div>

                    {/* Settings Sections */}
                    <div className="space-y-6">
                        {/* General Settings */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Application Name</label>
                                        <p className="text-xs text-gray-500">Display name for the parking management system</p>
                                    </div>
                                    <input
                                        type="text"
                                        defaultValue="NuPark Management"
                                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-64"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Default Citation Amount</label>
                                        <p className="text-xs text-gray-500">Standard fine amount for new citations</p>
                                    </div>
                                    <input
                                        type="number"
                                        defaultValue="25"
                                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-24"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Auto-approve Appeals</label>
                                        <p className="text-xs text-gray-500">Automatically approve appeals under $20</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notification Settings */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                                        <p className="text-xs text-gray-500">Receive email alerts for new appeals</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">SMS Notifications</label>
                                        <p className="text-xs text-gray-500">Receive text messages for urgent matters</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Daily Reports</label>
                                        <p className="text-xs text-gray-500">Send daily summary reports</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* System Settings */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Configuration</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Data Retention (Days)</label>
                                        <p className="text-xs text-gray-500">How long to keep citation records</p>
                                    </div>
                                    <input
                                        type="number"
                                        defaultValue="365"
                                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-24"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Backup Frequency</label>
                                        <p className="text-xs text-gray-500">How often to backup system data</p>
                                    </div>
                                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-32">
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Maintenance Mode</label>
                                        <p className="text-xs text-gray-500">Temporarily disable public access</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* User Management */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Session Timeout (Minutes)</label>
                                        <p className="text-xs text-gray-500">Auto-logout after inactivity</p>
                                    </div>
                                    <input
                                        type="number"
                                        defaultValue="30"
                                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-24"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                                        <p className="text-xs text-gray-500">Require 2FA for all users</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-4 pt-6">
                            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                                Cancel
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}