import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Category from '../Pages/Category'
import Collections from '../Pages/Collections'
import Contact from '../Pages/Contact'

function Routing() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory" element={<Category />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default Routing