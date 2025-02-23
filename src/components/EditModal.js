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
  const [invalidFields, setInvalidFields] = useState({
    profilePicture: false,
    name: false,
    phone: false,
    email: false,
    address: false,
  });

  // Validation function
  const validateForm = () => {
    const errors = [];
    const newInvalidFields = {
      profilePicture: false,
      name: false,
      phone: false,
      email: false,
      address: false,
    };

    // Validate Profile Picture URL
    if (!profilePicture) {
      errors.push("Profile Picture URL is required.");
      newInvalidFields.profilePicture = true;
    }

    // Validate Name
    if (!name) {
      errors.push("Name is required.");
      newInvalidFields.name = true;
    }

    // Validate Phone Number
    if (!phone) {
      errors.push("Phone number is required.");
      newInvalidFields.phone = true;
    } else if (!/^\d+$/.test(phone)) {
      errors.push("Phone number must contain only numbers.");
      newInvalidFields.phone = true;
    } else if (!/^\d{11}$/.test(phone)) {
      errors.push("Phone number must be 11 digits.");
      newInvalidFields.phone = true;
    }

    // Validate Email
    if (!email) {
      errors.push("Email is required.");
      newInvalidFields.email = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Email is invalid.");
      newInvalidFields.email = true;
    }

    // Validate Address
    if (!address) {
      errors.push("Address is required.");
      newInvalidFields.address = true;
    }

    // Update invalid fields state
    setInvalidFields(newInvalidFields);

    return errors;
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = validateForm();

    if (errors.length > 0) {
      // Show SweetAlert2 popup with all errors
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        html: errors.map((error) => `<p class="text-danger">${error}</p>`).join(""),
        showConfirmButton: true,
      });
      return; // Stop form submission if validation fails
    }

    // If validation passes, proceed with form submission
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

    // Show success message
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
          <div className="row g-3">
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
                className={`form-control ${
                  invalidFields.profilePicture ? "is-invalid" : ""
                }`}
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
                className={`form-control ${
                  invalidFields.name ? "is-invalid" : ""
                }`}
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
                className={`form-control ${
                  invalidFields.phone ? "is-invalid" : ""
                }`}
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
                className={`form-control ${
                  invalidFields.email ? "is-invalid" : ""
                }`}
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
                className={`form-control ${
                  invalidFields.address ? "is-invalid" : ""
                }`}
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
