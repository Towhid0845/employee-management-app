import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/">
          Card View
        </Nav.Link>
        <Nav.Link as={Link} to="/table">
          Table View
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
