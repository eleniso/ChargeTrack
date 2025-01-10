import React, { useState } from 'react';
import './PersonalInfoPage.css';

const UpdateInfoPage = () => {
  const [formData, setFormData] = useState({
    name: 'John',
    surname: 'Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    password: '',
    vehicles: 'Tesla Model 3',
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
    console.log('Updated Info:', formData);
    alert('Your information has been updated!');
  };

  return (
    <div className="personal-info-page">
      <h1>Update Information</h1>
      <form className="personal-info-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Vehicles:
          <input
            type="text"
            name="vehicles"
            value={formData.vehicles}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="update-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateInfoPage;