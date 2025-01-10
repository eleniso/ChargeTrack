import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      style={styles.button}
      onClick={() => navigate('/home')} // Redirect to the Home Page
    >
      <FontAwesomeIcon icon={faHome} style={styles.icon} />
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    top: '20px',
    right: '20px', // Position at top-right
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000, // Ensure it's above other elements
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px', // Circular button
    height: '40px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  icon: {
    fontSize: '20px',
  },
};

export default HomeButton;