import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FutureReservationsPage.css';

const FutureReservationsPage = () => {
  const [reservation, setReservation] = useState(null);
  const location = useLocation();
  const [station, setStation] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const stationName = params.get('station');
    setStation(stationName);
  }, [location.search]);

  const handleShowReservation = () => {
    setReservation({
      startDate: '21-12-24 12:30:20',
      endDate: '21-12-24 13:15:45',
      chargingStation:'Ampelokipoi,Athens',
      chargingSpot: '90',
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Future Reservations</h1>
      <p>Here, you can view and manage your future charging reservations.</p>
      <button style={styles.button} onClick={handleShowReservation}>
        Show Reservation
      </button>
      {reservation && (
        <div style={styles.reservationDetails}>
          <p><strong>StartDate:</strong> {reservation.startDate}</p>
          <p><strong>EndDate:</strong> {reservation.endDate}</p>
          <p><strong>ChargingStation:</strong> {reservation.chargingStation}</p>
          <p><strong>ChargingSpot:</strong> {reservation.chargingSpot}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2d2d2d',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: 'green',
    marginBottom: '30px',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  reservationDetails: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left',
    width: '300px',
  },
};

export default FutureReservationsPage;
