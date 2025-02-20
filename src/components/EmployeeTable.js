import React from "react";
import { Table, Button } from "react-bootstrap";

const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Profile</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, i) => (
            <tr key={employee.id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    employee.profilePicture || "https://via.placeholder.com/50"
                  }
                  alt={`${employee.name}'s Profile`}
                  width="50"
                  height="50"
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>
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
  );
};

export default EmployeeTable;
