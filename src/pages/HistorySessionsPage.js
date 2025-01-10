import React, { useState, useEffect } from 'react';
import './HistorySessionsPage.css';

const HistorySessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a backend
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          date: '2025-01-01',
          time: '10:00 AM',
          station: 'Station A',
          energyUsed: '15 kWh',
          cost: '$5.00',
        },
        {
          id: 2,
          date: '2025-01-05',
          time: '3:00 PM',
          station: 'Station B',
          energyUsed: '20 kWh',
          cost: '$6.50',
        },
        {
          id: 3,
          date: '2025-01-10',
          time: '9:30 AM',
          station: 'Station C',
          energyUsed: '25 kWh',
          cost: '$7.80',
        },
      ];

      setSessions(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="history-sessions-page">
      <h1>Session History</h1>
      <table className="sessions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Station</th>
            <th>Energy Used</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.date}</td>
              <td>{session.time}</td>
              <td>{session.station}</td>
              <td>{session.energyUsed}</td>
              <td>{session.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySessionsPage;