import logo from "../assets/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ links }) => {
    return (
        <div className="w-64 bg-white shadow-xl p-4">
            <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="PiRate Logo" className="h-8 w-8" />
                <h2 className="text-2xl font-bold">PiRate</h2>
            </div>
            <ul className="space-y-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.path}
                            className="text-lg hover:text-blue-600 cursor-pointer block"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;