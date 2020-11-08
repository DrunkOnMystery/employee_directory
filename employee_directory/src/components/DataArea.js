import React from "react";
import Nav from "./components/Nav";
import DataTable from "./components/DataTable";
import "../styles/DataArea.css";

function DataArea() {
    return(
        <div className="DataArea">
        <Nav />
        <DataTable />
        </div>
    )
}

export default DataArea;