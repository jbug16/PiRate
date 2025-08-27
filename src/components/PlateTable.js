import React from "react";

const PlateTable = ({ plates }) => {
    return (
        <div className="bg-white shadow rounded-xl p-6">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr>
                    <th className="border-b p-3">Plate Number</th>
                    <th className="border-b p-3">Owner</th>
                    <th className="border-b p-3">Permit Status</th>
                    <th className="border-b p-3">Ticket Count</th>
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
                        <td className="p-3 border-b">{plate.tickets}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlateTable;