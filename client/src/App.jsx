import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routes/Routing";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
