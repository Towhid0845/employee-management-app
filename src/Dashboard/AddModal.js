import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

function Add({ employees, setEmployees, setIsAdding, show, onHide }) {
  const [profilePicture, setProfilePicture] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!profilePicture || !name || !phone || !email || !address) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      profilePicture,
      name,
      phone,
      email,
      address,
    };
    employees.push(newEmployee);
    setEmployees([...employees]);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${name} ${phone}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    // <div className="small-container">
    //   <Modal show={show} onHide={onHide} size="lg">
    //     <Modal.Header closeButton>
    //       <Modal.Title>Add Employee</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <form onSubmit={handleAdd}>
    //         <label className="form-label" htmlFor="profilePicture">Profile Picture</label>
    //         <input
    //           id="profilePicture"
    //           type="text"
    //           name="profilePicture"
    //           value={profilePicture}
    //           onChange={(e) => setProfilePicture(e.target.value)}
    //         />
    //         <label className="form-label" htmlFor="name">Name</label>
    //         <input
    //           id="name"
    //           type="text"
    //           ref={textInput}
    //           name="name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //         <label className="form-label" htmlFor="phone">Phone No</label>
    //         <input
    //           id="phone"
    //           type="text"
    //           name="phone"
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value)}
    //         />
    //         <label className="form-label" htmlFor="email">Email</label>
    //         <input
    //           id="email"
    //           type="email"
    //           name="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <label className="form-label" htmlFor="address">Address</label>
    //         <input
    //           id="address"
    //           type="text"
    //           name="address"
    //           value={address}
    //           onChange={(e) => setAddress(e.target.value)}
    //         />

    //         <div style={{ marginTop: "30px" }}>
    //           <input type="submit" value="Add" />
    //           <input
    //             style={{ marginLeft: "12px" }}
    //             className="muted-button"
    //             type="button"
    //             value="Cancel"
    //             onClick={() => setIsAdding(false)}
    //           />
    //         </div>
    //       </form>
    //     </Modal.Body>
    //   </Modal>
    // </div>
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAdd} className="employee-form">
          <div class="row g-3">
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="profilePicture">Profile Picture URL</label>
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

            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                ref={textInput}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="phone">Phone No</label>
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
              <label className="form-label" htmlFor="email">Email</label>
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

            <div className="form-group col-md-12">
              <label className="form-label" htmlFor="address">Address</label>
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
