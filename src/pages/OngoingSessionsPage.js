
// import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import HomeButton from '../components/HomeButton'; // Import the HomeButton
// import BubbleLogo from '../components/BubbleLogo';
// const OngoingSessionsPage = () => {
//   const remainingSessionTime = 50;
//   const chargingLevel = 30;
//   const energyConsumption = 70;

//   return (
//     <div style={{ color: 'white', backgroundColor: '#2d2d2d', textAlign: 'center', padding: '20px' }}>
//       <HomeButton /> {/* Add the HomeButton */}
//       <BubbleLogo />
//       <h2>Current Session</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
//         <div>
//           <CircularProgressbar
//             value={remainingSessionTime}
//             text={`${remainingSessionTime}%`}
//             styles={buildStyles({
//               pathColor: 'green',
//               trailColor: '#2d2d2d',
//               textColor: 'white',
//             })}
//           />
//           <p>Remaining Session Time</p>
//         </div>
//         <div>
//           <CircularProgressbar
//             value={chargingLevel}
//             text={`${chargingLevel}%`}
//             styles={buildStyles({
//               pathColor: 'green',
//               trailColor: '#2d2d2d',
//               textColor: 'white',
//             })}
//           />
//           <p>Charging Level</p>
//         </div>
//         <div>
//           <CircularProgressbar
//             value={energyConsumption}
//             text={`${energyConsumption}%`}
//             styles={buildStyles({
//               pathColor: 'green',
//               trailColor: '#2d2d2d',
//               textColor: 'white',
//             })}
//           />
//           <p>Energy Consumed</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OngoingSessionsPage;

import React from 'react';
import HomeButton from '../components/HomeButton'; // Import the HomeButton
import BubbleLogo from '../components/BubbleLogo';

const CarProgress = ({ value, label }) => {
  const carWidth = 320;
  const carHeight = 80;
  const wheelRadius = 20;

  // Calculate the fill width based on the percentage (do not exceed car body width)
  const fillWidth = (carWidth * value) / 100;

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: 'auto' }}
      >
        {/* Car Body Outline (no color) */}
        <rect
          x="40"
          y="80"
          width={carWidth}
          height={carHeight}
          rx="30"
          ry="30"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* Wheels (Static, black) */}
        <circle cx="80" cy="160" r={wheelRadius} fill="black" />
        <circle cx="320" cy="160" r={wheelRadius} fill="black" />

        {/* Car Body Fill (Even fill based on percentage) */}
        <rect
          x="40"
          y="80"
          width={fillWidth} // Fill based on the percentage
          height={carHeight } // Ensure it stops just above the wheels
          fill="green"
          rx="30"
          ry="30"
        />

        {/* Percentage Text */}
        <text
          x="200"
          y="115"
          textAnchor="middle"
          fontSize="22"
          fill="white"
          fontWeight="bold"
        >
          {`${value}%`}
        </text>
      </svg>
      <p style={{ color: 'white' }}>{label}</p>
    </div>
  );
};

const OngoingSessionsPage = () => {
  const remainingSessionTime = 50;
  const chargingLevel = 30;
  const energyConsumption = 70;

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: '#2d2d2d',
        textAlign: 'center',
        padding: '20px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <HomeButton /> {/* Add the HomeButton */}
        <BubbleLogo />
        <h2>Current Session</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <CarProgress value={remainingSessionTime} label="Remaining Session Time" />
          <CarProgress value={chargingLevel} label="Charging Level" />
          <CarProgress value={energyConsumption} label="Energy Consumed" />
        </div>
      </div>
    </div>
  );
};

export default OngoingSessionsPage;