import React, { useState } from "react";

const BookingForm = ({ movieName, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      movieName,
      name,
      email,
      phone,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    onSubmit();
  };

  const handleClose = () => {
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
  <h3 className="below-line">Booking Form</h3>

  <div className="mb-3">
  <div className="mb-3">
        <label htmlFor="movieName" className="form-label">
          Movie Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="movieName"
          value={movieName}
          readOnly
        />
      </div>
    <label htmlFor="name" className="form-label">
      Name:
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="phone" className="form-label">
      Phone:
    </label>
    <input
      type="tel"
      className="form-control"
      id="phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Buy
  </button>
  <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={handleClose}
      >
        Close
      </button>
</form>

  );
};

export default BookingForm;
