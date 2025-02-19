import React from "react";
import { Card } from "react-bootstrap";

const EmployeeCard = ({ employee }) => {
  return (
    <Card className="m-3">
      <Card.Img
        variant="top"
        src={
          employee.profilePicture ||
          "https://via.assets.so/img.jpg"
        }
      />
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Text>
          📞 {employee.phone} <br />
          📧 {employee.email} <br />
          📍 {employee.address}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
