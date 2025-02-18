import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <Nav className="flex-column">
        <Nav.Link href="/">Card View</Nav.Link>
        <Nav.Link href="/table">Table View</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
