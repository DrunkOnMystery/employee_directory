import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;

// App
//   Wrapper
//     Header 
//     Main 
//       DataArea
//         Nav
//           SearchBox
//         DataTable
//           DataBody