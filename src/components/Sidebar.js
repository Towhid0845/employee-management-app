import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ( { toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState("cardView");

  // Function to handle menu item clicks
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <aside class={`sidebar position-fixed top-0 start-0 h-100 w-100`}>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <div className="logo">
          <Link to="/">
            <img width="80" src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <button
          className="close_mobile_sidebar bg-transparent border-0 d-block d-lg-none"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="menu_list">
        <ul className="list-unstyled">
          <Nav
            className={`menu_item ${activeMenu === "cardView" ? "active" : ""}`}
          >
            <Nav.Link
              as={Link}
              to="/"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Dashboard"
              onClick={() => handleMenuClick("cardView")}
            >
              <div className="menu_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                  <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                  <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                  <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                </svg>
              </div>
              <div className="menu_name">Card View</div>
              <div className="menu_info">
                <div className="menu_number">5</div>
              </div>
            </Nav.Link>
          </Nav>
          <Nav
            className={`menu_item ${
              activeMenu === "tableView" ? "active" : ""
            }`}
          >
            <Nav.Link
              as={Link}
              to="/table"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="Default"
              onClick={() => handleMenuClick("tableView")}
            >
              <div className="menu_icon">
                <svg
                  fill="#000000"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22,17 L22,19 L8,19 L8,17 L22,17 Z M22,11 L22,13 L8,13 L8,11 L22,11 Z M22,5 L22,7 L8,7 L8,5 L22,5 Z M4,20 C2.8954305,20 2,19.1045695 2,18 C2,16.8954305 2.8954305,16 4,16 C5.1045695,16 6,16.8954305 6,18 C6,19.1045695 5.1045695,20 4,20 Z M4,14 C2.8954305,14 2,13.1045695 2,12 C2,10.8954305 2.8954305,10 4,10 C5.1045695,10 6,10.8954305 6,12 C6,13.1045695 5.1045695,14 4,14 Z M4,8 C2.8954305,8 2,7.1045695 2,6 C2,4.8954305 2.8954305,4 4,4 C5.1045695,4 6,4.8954305 6,6 C6,7.1045695 5.1045695,8 4,8 Z"
                  />
                </svg>
              </div>
              <div className="menu_name">Table View</div>
            </Nav.Link>
          </Nav>
        </ul>
      </div>
      <div className="log_out">
        <a href="#" className="logout_btn">
          <div className="text">Log Out</div>
          <span className="sign">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
