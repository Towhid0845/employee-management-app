import React, { useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import employeesData from "../data/employees";

const TableView = () => {
  const [employees, setEmployees] = useState(employeesData);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="container">
      <EmployeeTable employees={employees} onDelete={handleDelete} />
    </div>
  );
};

export default TableView;
