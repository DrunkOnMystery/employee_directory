import React from "react";
import DataArea from "./DataArea";
import Nav from "./Nav";
// import "./Main.css";

function Main(props) {
    return (
        <div className="Main">
            <Nav />
            {props.children}
            <DataArea />
        </div>
    )
}

export default Main;