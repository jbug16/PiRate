import React from "react";

const PlateTable = ({ plates }) => {
    return (
        <table border="1" style={{ width: "100%", marginTop: "20px" }}>
            <thead>
            <tr>
                <th>Plate Number</th>
                <th>Owner</th>
                <th>Permit Status</th>
            </tr>
            </thead>
            <tbody>
            {plates.map((plate, index) => (
                <tr key={index}>
                    <td>{plate.number}</td>
                    <td>{plate.owner}</td>
                    <td>{plate.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default PlateTable;