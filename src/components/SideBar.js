import logo from "../assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ pages }) => {
    return (
        <div className="w-64 bg-white shadow-xl p-4">
            <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="PiRate Logo" className="h-8 w-8" />
                <h2 className="text-2xl font-bold">PiRate</h2>
            </div>
            <ul className="space-y-3">
                {pages.map((page, index) => (
                    <li key={index}>
                        <Link
                            to={page.path}
                            className="text-lg hover:text-blue-600 cursor-pointer block"
                        >
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;