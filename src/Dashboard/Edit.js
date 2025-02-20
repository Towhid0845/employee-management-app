import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
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
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${updatedEmployee.name}'s details have been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>

        <label htmlFor="profilePicture">Profile Picture URL</label>
        <input
          id="profilePicture"
          type="text"
          name="profilePicture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;


