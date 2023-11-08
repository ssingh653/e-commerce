import "./App.css";
import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Routing from "./components/Routes/Routing";
import Topbar from "./components/Topbar/Topbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
      <Routing />
      {/* <h1 className="border m-4">E-Commerce</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
