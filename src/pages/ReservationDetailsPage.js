import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReservationDetailsPage.css';

const ReservationDetailsPage = () => {
  const location = useLocation();
  const station = location.state || {};
  const { name, reservedSpot, spots } = station;

  const [formData, setFormData] = useState({
    startTime: '',
    endTime: '',
    licensePlate: '',
    ownerName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', { ...formData, station, reservedSpot });
    alert(`Reservation confirmed for Spot #${reservedSpot} at ${name}!`);
  };

  return (
    <div className="reservation-details">
      <h1>Reservation Details</h1>
      <div className="station-info">
        <p><strong>Station:</strong> {name}</p>
        <p><strong>Total Spots:</strong> {spots}</p>
        <p><strong>Reserved Spot:</strong> Spot #{reservedSpot}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          License Plate:
          <input
            type="text"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Owner's Name:
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default ReservationDetailsPage;