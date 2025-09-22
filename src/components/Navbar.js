import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pirate_logo3.png";

export default function Navbar({ currentPage }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);


    const handleAddItem = (type) => {
        setIsDropdownOpen(false);
        // Navigate to appropriate page or open modal
        switch(type) {
            case 'citation':
                navigate('/citations');
                break;
            case 'person':
                navigate('/people');
                break;
            case 'vehicle':
                navigate('/people'); // Vehicles are managed through people
                break;
            default:
                break;
        }
    };
    return (
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 border-b border-gray-500 px-6 py-4 shadow-lg">
            <div className="flex items-center justify-between">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="NuPark Logo" className="h-10 w-10" />
                </div>

                {/* Center - Search bar and + New button */}
                <div className="flex-1 max-w-md mx-8">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                        />
                        <div className="relative dropdown-container">
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                                    <button
                                        onClick={() => handleAddItem('citation')}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                    >
                                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span>Add Citation</span>
                                    </button>
                                    <button
                                        onClick={() => handleAddItem('person')}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                    >
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span>Add Person</span>
                                    </button>
                                    <button
                                        onClick={() => handleAddItem('vehicle')}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                    >
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                        </svg>
                                        <span>Add Vehicle</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side - navigation and driving mode toggle */}
                <div className="flex items-center space-x-6">
                    <nav className="flex space-x-6">
                        <Link to="/" className={`font-medium transition-colors duration-200 ${currentPage === 'home' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            HOME
                        </Link>
                        <Link to="/people" className={`font-medium transition-colors duration-200 ${currentPage === 'people' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            PEOPLE
                        </Link>
                        <Link to="/citations" className={`font-medium transition-colors duration-200 ${currentPage === 'citations' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            CITATIONS
                        </Link>
                        <Link to="/appeals" className={`font-medium transition-colors duration-200 ${currentPage === 'appeals' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            APPEALS
                        </Link>
                        <Link to="/scanmode" className={`font-medium transition-colors duration-200 ${currentPage === 'scanmode' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            DRIVE
                        </Link>
                        <Link to="/settings" className={`font-medium transition-colors duration-200 ${currentPage === 'settings' ? 'text-white border-b-2 border-white pb-1' : 'text-white/80 hover:text-white'}`}>
                            SETTINGS
                        </Link>
                    </nav>
                    
                </div>
            </div>
        </div>
    );
}
