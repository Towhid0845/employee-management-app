import React, { useState, useRef, useEffect } from "react";
import DateTime from "./DateTIme";

const AppNavbar = ({ toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const menuRefs = useRef({}); // Store multiple refs for different dropdowns

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu)); // Toggle the correct dropdown
  };

  const handleClickOutside = (event) => {
    if (
      openDropdown &&
      menuRefs.current[openDropdown] &&
      !menuRefs.current[openDropdown].contains(event.target)
    ) {
      setOpenDropdown(null); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header className="header_area w-100">
      <div className="row">
        <div className="col-md-4 col-4 align-self-center">
          <div className="header_left">
            <div className="main d-flex gap-2 align-items-center">
              <div className="sidebar_control_bar">
                <button
                  className="sidebar_control_btn border-0"
                  onClick={toggleSidebar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6h16" />
                    <path d="M7 12h13" />
                    <path d="M10 18h10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-8 align-self-center">
          <div className="header_right d-flex align-items-center justify-content-end gap-4">
            <div className="date_time position-relative">
              <p id="currentDateTime">
                <DateTime />
              </p>
            </div>
            <div className="action_info d-flex gap-4 align-items-center">
              <div
                className="icon_box position-relative"
                ref={(el) => (menuRefs.current["menu1"] = el)}
              >
                <button
                  className="icon_btn dropdown_menu bg-transparent border-0 position-relative"
                  onClick={() => toggleDropdown("menu1")}
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <sup className="notification_number position-absolute rounded-pill d-flex justify-content-center align-items-center">
                    5
                  </sup>
                </button>
                <div
                  className={`information_box dropdown_menu_info notification_information position-absolute top-100 end-0 ${
                    openDropdown === "menu1" ? "show" : ""
                  }`}
                >
                  <div className="top d-flex justify-content-between align-items-center gap-4">
                    <h3 className="title">Notification</h3>
                    <button className="clear bg-transparent border-0">
                      Clear
                    </button>
                  </div>
                  <div className="list">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="d-flex w-100 align-items-center">
                          <div className="img">
                            <img
                              src="images/profile-user.png"
                              alt="profile-user"
                            />
                          </div>
                          <div className="info">
                            <h4 className="name">Erin Gonzales</h4>
                            <p>comment on your board</p>
                          </div>
                          <div className="time">7:57PM</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btm text-center">
                    <button className="view w-100">View All</button>
                  </div>
                </div>
              </div>
              <div
                className="icon_box position-relative "
                ref={(el) => (menuRefs.current["menu2"] = el)}
              >
                <button
                  className="icon_btn dropdown_menu bg-transparent border-0 position-relative"
                  onClick={() => toggleDropdown("menu2")}
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-message"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                  </svg>
                  <sup className="notification_number position-absolute rounded-pill d-flex justify-content-center align-items-center">
                    2
                  </sup>
                </button>
                <div
                  className={`information_box dropdown_menu_info messages_information position-absolute top-100 end-0 ${
                    openDropdown === "menu2" ? "show" : ""
                  }`}
                >
                  <div className="top d-flex justify-content-between align-items-center gap-4">
                    <h3 className="title">Messages</h3>
                    <button className="clear bg-transparent border-0">
                      Clear
                    </button>
                  </div>
                  <div className="list">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="d-flex w-100 align-items-center">
                          <div className="img mail">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-message"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M8 9h8" />
                              <path d="M8 13h6" />
                              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                            </svg>
                          </div>
                          <div className="info">
                            <h4 className="name">Erin Gonzales</h4>
                            <p>comment on your board</p>
                          </div>
                          <div className="time">7:57PM</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="btm text-center">
                    <button className="view w-100">View All</button>
                  </div>
                </div>
              </div>
              <div
                className="user_box position-relative"
                ref={(el) => (menuRefs.current["menu3"] = el)}
              >
                <button
                  className="user_image dropdown_menu rounded-pill bg-transparent border-0 position-relative"
                  onClick={() => toggleDropdown("menu3")}
                >
                  <img
                    className="rounded-pill w-100 h-100 object-fit-cover"
                    src="images/profile.jpg"
                    alt="profile-user"
                  />
                </button>
                <div
                  className={`user_information position-absolute dropdown_menu_info ${
                    openDropdown === "menu3" ? "show" : ""
                  }`}
                >
                  <div className="edit_image text-center">
                    <div className="image position-relative">
                      <img src="images/profile.jpg" alt="profile-edit" />
                      <div className="edit_input">
                        <label for="file">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                          </svg>
                        </label>
                        <input type="file" id="file" className="d-none" />
                      </div>
                    </div>
                    <div className="name text-center">
                      <h4 className="nm">Towhiduzzaman</h4>
                      <a href="#" className="edit">
                        Edit Your Profile
                      </a>
                    </div>
                    <div className="menus text-start">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-contrast-2"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                              <path d="M3 19h2.25c3.728 0 6.75 -3.134 6.75 -7s3.022 -7 6.75 -7h2.25" />
                            </svg>
                            User Role
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-settings-2"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            </svg>
                            Site Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-topology-full-hierarchy"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M6 8v8" />
                              <path d="M18 16v-8" />
                              <path d="M8 6h8" />
                              <path d="M16 18h-8" />
                              <path d="M7.5 7.5l3 3" />
                              <path d="M13.5 13.5l3 3" />
                              <path d="M16.5 7.5l-3 3" />
                              <path d="M10.5 13.5l-3 3" />
                            </svg>
                            Activity Log
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                              <path d="M9 12h12l-3 -3" />
                              <path d="M18 15l3 -3" />
                            </svg>
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
