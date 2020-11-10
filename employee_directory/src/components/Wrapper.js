import React from "react";
// import Nav from "./components/Nav";
import Main from "./Main";
import Header from "./Header";

function Wrapper(props) {
    return (
        <main className="Wrapper">
        {props.children}
        </main>
    )
}

export default Wrapper;