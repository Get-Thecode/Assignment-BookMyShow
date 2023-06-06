import React, { useState } from 'react';

const BookingForm = ({ showId, movieName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic (e.g., saving data to local/session storage)
    const formData = {
      name,
      email,
      showId,
    };

    // Save formData to local/session storage
    // Example: Saving to localStorage
    localStorage.setItem('bookingData', JSON.stringify(formData));

    // Reset form inputs
    setName('');
    setEmail('');

    // Display a success message
    setBookingSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h3 className="mb-3">Book Movie Ticket</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Movie Name"
          value={movieName}
          readOnly
        />
      </div>
      <button type="submit" className="btn btn-primary">Book Now</button>
      {bookingSuccess && <p className="mt-3 text-success">Booking successful!</p>}
    </form>
  );
};

export default BookingForm;
