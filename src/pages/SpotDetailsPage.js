import React from 'react';
import { useParams } from 'react-router-dom';
import './SpotDetailsPage.css';

function SpotDetailsPage() {
  const { number } = useParams(); // Get spot number from URL

  return (
    <div className="spot-details">
      <h2>Spot {number}</h2>
      <p>Date: Not Reserved</p>
      <p>License Plate: Not Reserved</p>
    </div>
  );
}

export default SpotDetailsPage;