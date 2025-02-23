import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import EmployeeCard from "../components/EmployeeCard";
import employeesData from "../data/employees";
import Footer from "../components/Footer";

const CardView = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay (e.g., API call)
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 2 seconds delay
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="content_body position-relative">
      <div className="content_main">
        <div className="container">
          {/* pagination and action btn */}
          <div className="pagination_action d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center">
              <div className="page_header">
                <h4 className="form_card_title mb-0">Card View</h4>
              </div>
              <div className="top_pagination d-flex gap-4 align-items-center justify-content-end">
                <div className="pagination">
                  <p>
                    <span>1</span> - <span>100</span> of <span>500</span>
                  </p>
                </div>
                <div className="show_item d-flex align-items-center gap-3 ms-3">
                  <h4 className="sh">Show</h4>
                  <select className="form-select form-select-lg shadow-none">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>All</option>
                  </select>
                </div>
                <div className="prev_next_btn">
                  <button className="btns bg-transparent border-0">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </button>
                  <button className="active btns bg-transparent border-0">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {employeesData.map((employee) => (
              <div className="col-xl-3 col-md-4" key={employee.id}>
                <EmployeeCard employee={employee} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardView;
