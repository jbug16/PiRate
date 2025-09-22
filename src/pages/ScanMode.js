import '../styles/App.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ScanMode() {
    const [isCameraOn, setIsCameraOn] = useState(false);

    const handleCameraToggle = () => {
        setIsCameraOn(!isCameraOn);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-lg p-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Scan Mode</h1>
                            <p className="text-gray-600 mb-8">Ready to scan license plates and issue citations</p>
                            
                            {/* Camera Toggle */}
                            <div className="flex justify-center items-center space-x-4 mb-8">
                                <span className="text-gray-700 font-medium">Camera:</span>
                                <div className="relative">
                                    <input 
                                        type="checkbox" 
                                        id="camera-toggle" 
                                        className="sr-only" 
                                        checked={isCameraOn}
                                        onChange={handleCameraToggle}
                                    />
                                    <label htmlFor="camera-toggle" className="flex items-center cursor-pointer">
                                        <div className="relative">
                                            <div className={`w-16 h-8 rounded-full shadow-inner transition-colors duration-300 ${
                                                isCameraOn ? 'bg-green-500' : 'bg-gray-300'
                                            }`}></div>
                                            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
                                                isCameraOn ? 'right-1' : 'left-1'
                                            }`}>
                                                <svg className={`w-4 h-4 ${isCameraOn ? 'text-green-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <span className={`font-medium ${isCameraOn ? 'text-green-600' : 'text-gray-500'}`}>
                                    {isCameraOn ? 'ON' : 'OFF'}
                                </span>
                            </div>
                            
                            {/* Camera/Scanner view */}
                            <div className={`border-2 border-dashed rounded-lg h-96 flex items-center justify-center mb-8 ${
                                isCameraOn 
                                    ? 'bg-green-50 border-green-300' 
                                    : 'bg-gray-100 border-gray-300'
                            }`}>
                                <div className="text-center">
                                    {isCameraOn ? (
                                        <>
                                            <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <p className="text-green-600 font-medium">Camera Active</p>
                                            <p className="text-green-500 text-sm">Point camera at license plate</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500">Camera Off</p>
                                            <p className="text-gray-400 text-sm">Toggle camera to start scanning</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}