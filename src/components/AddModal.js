import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function Add({ employees, setEmployees, setIsAdding, show, onHide }) {
  const [profilePicture, setProfilePicture] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [invalidFields, setInvalidFields] = useState({
    profilePicture: false,
    name: false,
    phone: false,
    email: false,
    address: false,
  });

  const [isUploading, setIsUploading] = useState(false); // Track image upload status

  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  // Function to upload image to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

    try {
      setIsUploading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, // Replace with your Cloudinary cloud name
        formData
      );
      setProfilePicture(response.data.secure_url); // Save the image URL
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Failed to upload profile picture. Please try again.",
      });
      setIsUploading(false);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

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
      errors.push("Profile Picture is required.");
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

  const handleAdd = async (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = validateForm();

    if (errors.length > 0) {
      // Show SweetAlert2 popup with all errors
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        html: errors
          .map((error) => `<p class="text-danger">${error}</p>`)
          .join(""),
        showConfirmButton: true,
      });
      return; // Stop form submission if validation fails
    }

    // If validation passes, proceed with form submission
    const id = employees.length + 1;
    const newEmployee = {
      id,
      profilePicture,
      name,
      phone,
      email,
      address,
    };

    try {
      // Save employee data to MockAPI
      const response = await axios.post(
        "https://6313b715a8d3f673ffcf5d61.mockapi.io/employee", // Replace with your MockAPI endpoint
        newEmployee
      );

      // Update local state (if needed)
      setEmployees([...employees, response.data]);

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${name}'s data has been added.`,
        showConfirmButton: false,
        timer: 1500,
      });

      // Close the modal
      setIsAdding(false);
    } catch (error) {
      console.error("Error adding employee:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add employee. Please try again.",
      });
    }

    // setEmployees([...employees, newEmployee]);
    // setIsAdding(false);

    // // Show success message
    // Swal.fire({
    //   icon: "success",
    //   title: "Added!",
    //   text: `${name}'s data has been added.`,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAdd} className="employee-form">
          <div className="row g-3">
            {/*<div className="form-group col-md-6">
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
            </div>*/}
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="profilePicture">
                Profile Picture
              </label>
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={`form-control ${
                  invalidFields.profilePicture ? "is-invalid" : ""
                }`}
                disabled={isUploading}
              />
              {isUploading && <p>Uploading image...</p>}
              {profilePicture && (
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  style={{ width: "100px", marginTop: "10px" }}
                />
              )}
            </div>

            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                ref={textInput}
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
                Phone No
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

            <div className="form-group col-md-12">
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
        <Button
          className="theme_btn bg-disable"
          onClick={() => setIsAdding(false)}
        >
          Cancel
        </Button>
        <Button className="theme_btn" onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Add;
