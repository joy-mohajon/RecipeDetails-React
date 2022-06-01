import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../app/screens/home/Home";
import Menu from "../app/screens/menu/Menu";

export default function Navigator() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
