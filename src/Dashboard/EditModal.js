import React, { useState } from "react";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

function Edit({ employees, show, onHide, selectedEmployee, setEmployees }) {
  const id = selectedEmployee.id;

  const [profilePicture, setProfilePicture] = useState(
    selectedEmployee.profilePicture
  );
  const [name, setName] = useState(selectedEmployee.name);
  const [phone, setPhone] = useState(selectedEmployee.phone);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [address, setAddress] = useState(selectedEmployee.address);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!profilePicture || !name || !phone || !email || !address) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      id,
      profilePicture,
      name,
      phone,
      email,
      address,
    };

    const updatedList = employees.map((emp) =>
      emp.id === id ? updatedEmployee : emp
    );

    setEmployees(updatedList);
    onHide();

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${updatedEmployee.name}'s details have been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpdate} className="employee-form">
          <div class="row g-3">
            <div className="form-group col-lg-6">
              <label className="form-label" htmlFor="profilePicture">
                Profile Picture URL
              </label>
              <input
                id="profilePicture"
                type="text"
                name="profilePicture"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                className="form-control"
                placeholder="Enter profile picture URL"
              />
            </div>
            <div className="form-group col-lg-6">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group col-lg-12">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Enter address"
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="theme_btn bg-disable" onClick={onHide}>
          Cancel
        </Button>
        <Button className="theme_btn" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Edit;
