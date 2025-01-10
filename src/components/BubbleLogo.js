import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BubbleLogo.css';

function BubbleLogo() {
  const navigate = useNavigate();
  return (
    <div className="bubble-logo" onClick={() => navigate('/account')}>
      <img src="/ChargeTrack_large_logo.png" alt="ChargeTrack Logo" />
    </div>
  );
}

export default BubbleLogo;
