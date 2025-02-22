import React from "react";
import {Table} from "react-bootstrap";
import ActionButtons from "./ActionButtons";

const EmployeeTable = ({ employees, handleView, handleEdit, handleDelete }) => {
  return (
    <div className="base_table_list">
      <div className="table-responsive text-nowrap">
        <Table bordered className="mt-4">
          <thead>
            <tr>
              <th className="sl" style={{ width: "50px" }}>
                <span className="heading">
                  SL
                  <img
                    className="icon-up"
                    src="images/icon-up.svg"
                    alt="Sort"
                  />
                </span>
              </th>
              <th style={{ minWidth: "150px" }}>
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
              <th style={{ minWidth: "150px" }}>Status</th>
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
                  <td className="action_td">
                    <span className={`status ${employee.status}`}>
                      {employee.status || "..."}
                    </span>
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
      </div>
    </div>
  );
};

export default EmployeeTable;
