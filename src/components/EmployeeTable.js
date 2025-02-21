import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import ActionButtons from "./ActionButtons";
import EmployeeViewModal from "./EmployeeViewModal";


const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleView = (employee) => {
    console.log("Selected Employee:", employee); // Debugging log
    setSelectedEmployee(employee);
    setModalShow(true);
  };
  return (
    // <Table striped bordered hover className="mt-4">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Profile</th>
    //       <th>Name</th>
    //       <th>Phone</th>
    //       <th>Email</th>
    //       <th>Address</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {employees.length > 0 ? (
    //       employees.map((employee, i) => (
    //         <tr key={employee.id}>
    //           <td>{i + 1}</td>
    //           <td>
    //             <img
    //               src={
    //                 employee.profilePicture || "https://via.placeholder.com/50"
    //               }
    //               alt={`${employee.name}'s Profile`}
    //               width="50"
    //               height="50"
    //             />
    //           </td>
    //           <td>{employee.name}</td>
    //           <td>{employee.phone}</td>
    //           <td>{employee.email}</td>
    //           <td>{employee.address}</td>
    //           <td>
    //             <Button
    //               variant="warning"
    //               className="me-2"
    //               onClick={() => handleEdit(employee.id)}
    //             >
    //               Edit
    //             </Button>
    //             <Button
    //               variant="danger"
    //               onClick={() => handleDelete(employee.id)}
    //             >
    //               Delete
    //             </Button>
    //           </td>
    //         </tr>
    //       ))
    //     ) : (
    //       <tr>
    //         <td colSpan={7}>No Employees</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </Table>

    // <div class="base_table_list">
    //   <div class="table-responsive text-nowrap">
    //     <table class="table">
    //       <thead>
    //         <tr>
    //           <th class="sl">
    //             <span class="heading">
    //               SL
    //               <img
    //                 class="icon-up"
    //                 src="images/icon-up.svg"
    //                 alt="icon-up"
    //               />
    //             </span>
    //           </th>
    //           <th>
    //             <div class="heading">
    //               Name
    //               <img
    //                 class="icon-up"
    //                 src="images/icon-up.svg"
    //                 alt="icon-up"
    //               />
    //             </div>
    //           </th>
    //           <th>
    //             <div class="heading">
    //               CS NO
    //               <img
    //                 class="icon-up"
    //                 src="images/icon-up.svg"
    //                 alt="icon-up"
    //               />
    //             </div>
    //           </th>
    //           <th>
    //             <div class="heading">
    //               CS Date
    //               <img
    //                 class="icon-up"
    //                 src="images/icon-up.svg"
    //                 alt="icon-up"
    //               />
    //             </div>
    //           </th>
    //           <th>
    //             <div class="heading">
    //               Last Approved
    //               <img
    //                 class="icon-up"
    //                 src="images/icon-up.svg"
    //                 alt="icon-up"
    //               />
    //             </div>
    //           </th>
    //           <th>Status</th>
    //           <th class="action_th"></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>1</td>
    //           <td>Created Item</td>
    //           <td>2024061210048</td>
    //           <td>09 Jul, 2024</td>
    //           <td>Approved by S M Latifur Rahman</td>
    //           <td>
    //             <span class="status pending">Pending</span>
    //           </td>
    //           <td class="action_td">
    //             <div class="actions position-relative">
    // <div class="action_btn">
    //   <a href="#">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       stroke-width="2"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
    //     >
    //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //       <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    //       <path d="M13.5 6.5l4 4" />
    //     </svg>
    //   </a>
    //   <a href="#">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       stroke-width="2"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
    //     >
    //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //       <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    //       <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    //     </svg>
    //   </a>
    //   <a href="#">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       stroke-width="2"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
    //     >
    //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //       <path d="M4 7l16 0" />
    //       <path d="M10 11l0 6" />
    //       <path d="M14 11l0 6" />
    //       <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    //       <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    //     </svg>
    //   </a>
    // </div>
    //             </div>
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="base_table_list">
      <div className="table-responsive text-nowrap">
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th className="sl">
                <span className="heading">
                  SL
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </span>
              </th>
              <th>
                <div className="heading">
                  Name
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </div>
              </th>
              <th>
                <div className="heading">
                  Phone
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </div>
              </th>
              <th>
                <div className="heading">
                  Email
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </div>
              </th>
              <th>
                <div className="heading">
                  Address
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </div>
              </th>
              <th>Status</th>
              <th className="action_th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{i + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <span
                      className={`status ${
                        employee.status
                          ? employee.status.toLowerCase()
                          : "unknown"
                      }`}
                    >
                      {employee.status || "Unknown"}
                    </span>
                  </td>

                  <td className="action_td">
                    <ActionButtons
                      onEdit={() => handleEdit(employee.id)}
                      onView={() => handleView(employee)}
                      onDelete={() => handleDelete(employee.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Employees</td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* Employee View Modal */}
        <EmployeeViewModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          employee={selectedEmployee}
        />
        
      </div>
    </div>
  );
};

export default EmployeeTable;
