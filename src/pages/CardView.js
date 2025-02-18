import React from "react";
import EmployeeCard from "../components/EmployeeCard";
import employeesData from "../data/employees";

const CardView = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {employeesData.map((employee) => (
          <div className="col-md-4" key={employee.id}>
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
