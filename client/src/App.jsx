import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routes/Routing";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
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
