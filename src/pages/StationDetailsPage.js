import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './StationDetailsPage.css';

function StationDetailsPage() {
  const { id } = useParams(); // Get station ID from URL

  // Mock data for spots
  const station = {
    id: id,
    name: "Station A",
    photo: "/assets/chargingStationPhotos/stationA.jpg",
    address: "123 Main St",
    spots: [{ number: 1 }, { number: 2 }, { number: 3 }],
  };

  return (
    <div className="station-details">
      <h2>{station.name}</h2>
      <img src={station.photo} alt={station.name} />
      <p>Address: {station.address}</p>
      <h3>Available Spots:</h3>
      <ul>
        {station.spots.map(spot => (
          <li key={spot.number}>
            <Link to={`/spot/${spot.number}`}>Spot {spot.number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StationDetailsPage;