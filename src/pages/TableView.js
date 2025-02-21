import React, { useState } from "react";
import Swal from "sweetalert2";
import EmployeeTable from "../components/EmployeeTable";
import employeesData from "../data/employees";
import Add from "../Dashboard/Add";
import Edit from "../Dashboard/Edit";
import EmployeeEditModal from "../components/EmployeeEditModal";

const TableView = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    // <div className="container">
    //   <header>
    //     <h1>Employee Management Software</h1>
    //     <div style={{ marginTop: "30px", marginBottom: "18px" }}>
    //       <button onClick={() => setIsAdding(true)} className="round-button">
    //         Add Button
    //       </button>
    //     </div>
    //   </header>
    //   <EmployeeTable
    //     employees={employees}
    //     handleEdit={handleEdit}
    //     handleDelete={handleDelete}
    //   />

    //   {isAdding && (
    //     <Add
    //       employees={employees}
    //       setEmployees={setEmployees}
    //       setIsAdding={setIsAdding}
    //     />
    //   )}

    //   {isEditing && (
    //     <Edit
    //       employees={employees}
    //       selectedEmployee={selectedEmployee}
    //       setEmployees={setEmployees}
    //       setIsEditing={setIsEditing}
    //     />
    //   )}
    // </div>

    <div class="content_body position-relative">
      {/* <div class="component_loader">
          <div class="loader"></div>
        </div> */}
      <div class="content_main">
        {/* page header  */}
        <div class="page_header d-flex align-items-center justify-content-between gap-4">
          <h4 class="form_card_title">List Page</h4>
          <div class="header_base_search d-none d-md-flex gap-3 align-items-center">
            <div class="input_select">
              <select class="form-select form-select-lg shadow-none">
                <option selected>Select</option>
                <option>Select One</option>
                <option>Select Two</option>
                <option>Select Three</option>
              </select>
            </div>
            <div class="search_box position-relative">
              <input type="text" placeholder="Search..." />
              <button class="search_btn position-absolute top-50 translate-middle-y bg-transparent border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
              <button
                class="advance_filter"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Advance search"
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M6 4v4" />
                  <path d="M6 12v8" />
                  <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12 4v10" />
                  <path d="M12 18v2" />
                  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M18 4v1" />
                  <path d="M18 9v11" />
                </svg>
              </button>
              <div class="advance_search_result">
                <form action="#">
                  <div class="row g-3">
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                      <div class="form-group">
                        <label class="form-label d-flex justify-content-between align-items-center gap-4">
                          <div class="lft">
                            Company Name <sup class="text-danger">*</sup>
                          </div>
                        </label>
                        <div class="input-group position-relative">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                      <div class="form-group">
                        <label class="form-label d-flex justify-content-between align-items-center gap-4">
                          <div class="lft">Currency</div>
                        </label>
                        <div class="input-group position-relative">
                          <select class="chosen">
                            <option>--Select Currency--</option>
                            <option>Taka</option>
                            <option>USA Dollar</option>
                            <option>USA Dollar</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        class="theme_btn rounded-2 w-100 advance_search_btn"
                      >
                        Advance Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="right_page_header">
            <a href="#" class="back_or_add_btn">
              <span>
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </span>
              Add
            </a>
          </div>
        </div>
        {/* pagination and action btn */}
        <div class="pagination_action d-none d-md-block">
          <div class="row">
            <div class="col-md-6">
              <div class="top_pagination d-flex gap-4 align-items-center">
                <div class="pagination">
                  <p>
                    <span>1</span> - <span>100</span> of <span>500</span>
                  </p>
                </div>
                <div class="show_item d-flex align-items-center gap-3 ms-3">
                  <h4 class="sh">Show</h4>
                  <select class="form-select form-select-lg shadow-none">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>All</option>
                  </select>
                </div>
                <div class="prev_next_btn">
                  <button class="btns bg-transparent border-0">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </button>
                  <button class="active btns bg-transparent border-0">
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex gap-3 align-items-center justify-content-end">
                <div class="print_action text-end">
                  <button
                    class="p_btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Print"
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-printer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                      <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                      <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                    </svg>
                  </button>
                  <button
                    class="p_btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Downdload Excel"
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-file-excel"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                      <path d="M10 12l4 5" />
                      <path d="M10 17l4 -5" />
                    </svg>
                  </button>
                  <button
                    class="p_btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="PDF"
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
                      class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                      <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                      <path d="M17 18h2" />
                      <path d="M20 15h-3v6" />
                      <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmployeeTable
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {/* base pagination */}
        <div class="base_pagination d-flex justify-content-between align-items-center">
          <p class="number">1 - 100 of 500</p>
          <ul class="list-unstyled">
            <li>
              <a href="#">
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </a>
            </li>
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li class="rest">
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer class="footer_area text-center">
        <p>
          Copyright © 2024 <a href="#">Nogor Solutions Limited.</a> All Rights
          Reserved.
        </p>
      </footer>
      {/* Employee Edit Modal */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
      {/* <EmployeeEditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        employee={selectedEmployee}
      /> */}
    </div>
  );
};

export default TableView;
