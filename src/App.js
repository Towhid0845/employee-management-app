import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CardView from "./pages/CardView";
import TableView from "./pages/TableView";

const App = () => {
  // State to track sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Initialize sidebar state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarState");
    if (savedState === "collapsed") {
      setIsCollapsed(true);
    }
  }, []);

  // Save sidebar state to localStorage whenever it changes
  useEffect(() => {
    if (isCollapsed) {
      localStorage.setItem("sidebarState", "collapsed");
    } else {
      localStorage.removeItem("sidebarState");
    }
  }, [isCollapsed]);

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };


  return (
    <main class={`nsl_cms ${isCollapsed ? "collapsed_sidebar" : ""}`}>
      <Sidebar toggleSidebar={toggleSidebar} />
      {/* <Sidebar /> */}
      <div class="right_content">
        <AppNavbar toggleSidebar={toggleSidebar} />
        {/* <AppNavbar /> */}
        <Routes>
          <Route path="/" element={<CardView />} />
          <Route path="/table" element={<TableView />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
