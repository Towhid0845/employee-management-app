import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

const EmployeeViewModal = ({ show, onHide, employee }) => {
  if (!employee) return null;
  console.log("Employee in Modal:", employee);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="text-center border-0">
          <Card.Img
            variant="top"
            src={employee.profilePicture || "https://via.assets.so/img.jpg"}
            alt={employee.name}
            className="p-3 mx-auto d-block"
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
          />
          <Card.Body>
            <Card.Title>{employee.name}</Card.Title>
            <Card.Text>
              <strong>Phone:</strong> {employee.phone} <br />
              <strong>Email:</strong> {employee.email} <br />
              <strong>Address:</strong> {employee.address} <br />
              <strong>Status:</strong>{" "}
              <span className={`status ${employee.status?.toLowerCase()}`}>
                {employee.status}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeViewModal;
