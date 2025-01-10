import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MapPage from './pages/MapPage';
import StationDetailsPage from './pages/StationDetailsPage';
import SpotDetailsPage from './pages/SpotDetailsPage';
import OngoingSessionsPage from './pages/OngoingSessionsPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import SignUp from './pages/SignUp'; 
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import FutureReservationsPage from './pages/FutureReservationsPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import HistorySessionsPage from './pages/HistorySessionsPage';
import UpdateInfoPage from './pages/UpdateInfoPage';
import ReservationDetailsPage from './pages/ReservationDetailsPage';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/station/:id" element={<StationDetailsPage />} />
          <Route path="/spot/:number" element={<SpotDetailsPage />} />
          <Route path="/ongoing-sessions" element={<OngoingSessionsPage />} />
          <Route path="/sign-in" element={<SignInSignUpPage />} />
          <Route path="/sign-up" element={<SignUp />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/future-reservations" element={<FutureReservationsPage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/history-sessions" element={<HistorySessionsPage />} />
          <Route path="/personal-info" element={<PersonalInfoPage />} />
          <Route path="/update-info" element={<UpdateInfoPage />} />
          <Route path="/reservation-details" element={<ReservationDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
