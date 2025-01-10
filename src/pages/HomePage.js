import React from 'react';
import { Link } from 'react-router-dom';
import BubbleLogo from '../components/BubbleLogo';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home</h1>
      <BubbleLogo />
      {/* Navigation Links */}
      <div style={styles.linksContainer}>
        <Link to="/map" style={styles.link}>
          <button style={styles.button}>Find Stations</button>
        </Link>
        <Link to="/ongoing-sessions" style={styles.link}>
          <button style={styles.button}>Ongoing Sessions</button>
        </Link>
        <Link to="/future-reservations" style={styles.link}>
          <button style={styles.button}>Future Reservations</button>
        </Link>
      </div>
    </div>
  );
};

// Styles
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
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  },
};

export default HomePage;
