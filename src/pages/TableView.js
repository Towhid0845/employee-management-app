import React, { useState } from "react";
import Swal from "sweetalert2";
import { TbPlus } from "react-icons/tb";
import employeesData from "../data/employees";
import EmployeeTable from "../components/EmployeeTable";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import ViewModal from "../components/ViewModal";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

const TableView = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [isAdding, setIsAdding] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [viewModal, setViewModal] = useState(false);

    const handleAdd = () => {
      setIsAdding(true); 
      setAddModal(true); 
    };


  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
    setEditModal(true);
  };

  const handleView = (employee) => {
    setSelectedEmployee(employee);
    setViewModal(true);
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
    <div className="content_body position-relative">
      {/* <div className="component_loader">
          <div className="loader"></div>
        </div> */}
      <div className="content_main">
        {/* page header  */}
        <div className="page_header d-flex align-items-center justify-content-between gap-4">
          <h4 className="form_card_title">List View</h4>
          <div className="header_base_search d-none d-md-flex gap-3 align-items-center">
            <div className="input_select">
              <select className="form-select form-select-lg shadow-none">
                <option selected>Select</option>
                <option>Select One</option>
                <option>Select Two</option>
                <option>Select Three</option>
              </select>
            </div>
            <div className="search_box position-relative">
              <input type="text" placeholder="Search..." />
              <button className="search_btn position-absolute top-50 translate-middle-y bg-transparent border-0">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
              <button
                className="advance_filter"
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
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
              <div className="advance_search_result">
                <form action="#">
                  <div className="row g-3">
                    <div className="col-xxl-3 col-xl-4 col-lg-6">
                      <div className="form-group">
                        <label className="form-label d-flex justify-content-between align-items-center gap-4">
                          <div className="lft">
                            Company Name <sup className="text-danger">*</sup>
                          </div>
                        </label>
                        <div className="input-group position-relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6">
                      <div className="form-group">
                        <label className="form-label d-flex justify-content-between align-items-center gap-4">
                          <div className="lft">Currency</div>
                        </label>
                        <div className="input-group position-relative">
                          <select className="chosen">
                            <option>--Select Currency--</option>
                            <option>Taka</option>
                            <option>USA Dollar</option>
                            <option>USA Dollar</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="theme_btn rounded-2 w-100 advance_search_btn"
                      >
                        Advance Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="right_page_header">
            <button onClick={handleAdd} className="back_or_add_btn">
              <span>
                <TbPlus size={20} />
              </span>
              Add
            </button>
          </div>
        </div>
        {/* pagination and action btn */}
        <div className="pagination_action d-none d-md-block">
          <div className="row">
            <div className="col-md-6">
              <div className="top_pagination d-flex gap-4 align-items-center">
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
            <div className="col-md-6">
              <div className="d-flex gap-3 align-items-center justify-content-end">
                <div className="print_action text-end">
                  <button
                    className="p_btn"
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-printer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                      <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                      <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                    </svg>
                  </button>
                  <button
                    className="p_btn"
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-file-excel"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                      <path d="M10 12l4 5" />
                      <path d="M10 17l4 -5" />
                    </svg>
                  </button>
                  <button
                    className="p_btn"
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
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
          handleView={handleView}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {/* base pagination */}
        <div className="base_pagination d-flex justify-content-between align-items-center">
          <p className="number">1 - 100 of 500</p>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="rest">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />

      {/* Employee Add Modal */}
      {isAdding && (
        <AddModal
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          show={addModal}
          onHide={() => setAddModal(false)}
        />
      )}

      {/* Employee Edit Modal */}
      {isEditing && (
        <EditModal
          employees={employees}
          show={editModal}
          onHide={() => setEditModal(false)}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
        />
      )}

      {/* Employee View Modal */}
      <ViewModal
        show={viewModal}
        onHide={() => setViewModal(false)}
        employee={selectedEmployee}
      />
    </div>
  );
};

export default TableView;
