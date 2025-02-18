import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CardView from "./pages/CardView";
import TableView from "./pages/TableView";

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<CardView />} />
          <Route path="/table" element={<TableView />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
