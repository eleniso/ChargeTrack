import React from 'react';
import { useNavigate } from 'react-router-dom';
import BubbleLogo from '../components/BubbleLogo';
import './AccountPage.css';
import HomeButton from '../components/HomeButton'; // Import the HomeButton
function AccountPage() {
  const navigate = useNavigate();

  // Navigation handlers
  const goToFutureReservations = () => navigate('/future-reservations');
  const goToPersonalInfo = () => navigate('/personal-info');
  const goToHistorySessions = () => navigate('/history-sessions');

  return (
    <div className="account-page">
      <BubbleLogo />
      <HomeButton /> {/* Add the HomeButton */}
      <h1>Your Account</h1>

      {/* Personal Info Section */}
      <section>
        <h2
          className="clickable"
          onClick={goToPersonalInfo}
          style={{ cursor: 'pointer', color: '#4CAF50' }}
        >
          Personal Info
        </h2>
      </section>

      {/* Session History Section */}
      <section>
        <h2
          className="clickable"
          onClick={goToHistorySessions}
          style={{ cursor: 'pointer', color: '#4CAF50' }}
        >
          Session History
        </h2>
      </section>

      {/* Future Reservations Section */}
      <section>
        <h2
          className="clickable"
          onClick={goToFutureReservations}
          style={{ cursor: 'pointer', color: '#4CAF50' }}
        >
          Future Reservations
        </h2>
      </section>
    </div>
  );
}

export default AccountPage;