import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Collections from "../Pages/Collections";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { UserContextProvider } from "../UserContext";

function Routing() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserContextProvider>
  );
}

export default Routing;
