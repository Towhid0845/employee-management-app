import React from "react";
import { Table, Button } from "react-bootstrap";

const EmployeeTable = ({ employees, onDelete }) => {
  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Profile</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img
                src={
                  employee.profilePicture || "https://via.placeholder.com/50"
                }
                alt={employee.name}
                width="50"
                height="50"
              />
            </td>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>
              <Button variant="warning" className="me-2">
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(employee.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
