import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalInfoPage.css';
import HomeButton from '../components/HomeButton'; // Import the HomeButton
const PersonalInfoPage = () => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate('/update-info'); // Navigate to the Update Info Page
  };

  return (
    <div className="personal-info-page">
      <HomeButton /> {/* Add the HomeButton */}
      <h1>Personal Information</h1>
      <form className="personal-info-form">
        <label>
          Name:
          <input type="text" name="name" value="John" readOnly />
        </label>

        <label>
          Surname:
          <input type="text" name="surname" value="Doe" readOnly />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" value="123-456-7890" readOnly />
        </label>

        <label>
          Email:
          <input type="email" name="email" value="john.doe@example.com" readOnly />
        </label>

        <label>
          Password:
          <input type="password" name="password" value="******" readOnly />
        </label>

        <label>
          Vehicles:
          <input type="text" name="vehicles" value="Tesla Model 3" readOnly />
        </label>

        <button type="button" onClick={handleUpdateClick} className="update-button">
          Update Info
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoPage;