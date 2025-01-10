// import React from 'react';
// import { Link } from 'react-router-dom';
// import Chargetrack_large_logo from './ChargeTrack_large_logo.png';

// function WelcomePage() {
//   return (
//     <div style={{ textAlign: 'center', color: 'white' }}>
//       <h1 style={{ color: 'green', marginBottom: '20px' }}>Welcome to ChargeTrack</h1>
//       <img
//         src={Chargetrack_large_logo}
//         alt="ChargeTrack Logo"
//         style={{ width: '200px', height: '200px', marginBottom: '20px' }}
//       />
//       <div>
//         <Link to="/sign-in" style={{ marginRight: '10px', color: 'green' }}>
//           Sign In
//         </Link>
//         <Link to="/stations" style={{ marginLeft: '10px', color: 'green' }}>
//           Find Stations
//         </Link>
//       </div>
//       <div style={{ marginTop: '30px' }}>
//         <Link to="/map" style={{ marginRight: '10px', color: 'green' }}>
//           View Map
//         </Link>
//         <Link to="/ongoing-sessions" style={{ marginLeft: '10px', color: 'green' }}>
//           Ongoing Sessions
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default WelcomePage;











// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Chargetrack_large_logo from './ChargeTrack_large_logo.png';

// const WelcomePage = () => {
//   const [showOptions, setShowOptions] = useState(false);

//   const handleSignInSignUpClick = () => {
//     setShowOptions(true); 
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to ChargeTrack</h1>

//       <div style={styles.logoContainer}>
//         <img
//           src={Chargetrack_large_logo}
//           alt="ChargeTrack Logo"
//           style={styles.logo}
//         />
//       </div>

//       <div style={styles.linksContainer}>
//         <Link to="/sign-in" onClick={handleSignInSignUpClick} style={styles.link}>
//           Sign In/Sign Up
//         </Link>

//         {showOptions && (
//           <div style={styles.optionsContainer}>
//             <input type="email" placeholder="Enter your email" style={styles.inputField} />
//             <input type="password" placeholder="Enter your password" style={styles.inputField} />
//             <Link to="/sign-in">
//               <button style={styles.optionButton}>Sign In</button>
//             </Link>
//             <Link to="/sign-up">
//               <button style={styles.optionButton}>Sign Up</button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: '#2d2d2d', 
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     color: 'green', 
//     fontSize: '2rem',
//     marginBottom: '20px',
//   },
//   logoContainer: {
//     marginBottom: '20px',
//   },
//   logo: {
//     width: '200px',
//     height: '200px',
//   },
//   linksContainer: {
//     marginTop: '20px',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//   },
//   link: {
//     color: 'green',
//     textDecoration: 'none',
//     fontSize: '1.2rem',
//   },
//   input: {
//     padding: '10px', 
//     fontSize: '16px', 
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     width: '100px',
//     boxSizing: 'border-box' 
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     width: '100px',
//     boxSizing: 'border-box' 
//   },
// };

// export default WelcomePage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chargetrack_large_logo from './ChargeTrack_large_logo.png';

const WelcomePage = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSignInSignUpClick = () => {
    setShowOptions(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to ChargeTrack</h1>

      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src={Chargetrack_large_logo}
          alt="ChargeTrack Logo"
          style={styles.logo}
        />
      </div>

      {/* Sign In/Sign Up Section */}
      <div style={styles.linksContainer}>
        <Link to="#" onClick={handleSignInSignUpClick} style={styles.link}>
          Sign In/Sign Up
        </Link>

        {showOptions && (
          <div style={styles.optionsContainer}>
          
            <div style={styles.buttonGroup}>
              <Link to="/sign-in">
                <button style={styles.optionButton}>Sign In</button>
              </Link>
              <Link to="/sign-up">
                <button style={styles.optionButton}>Sign Up</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Additional Links for Features */}
      <div style={styles.additionalLinksContainer}>
        <Link to="/map" style={styles.link}>
          Find Stations
        </Link>
        <Link to="/ongoing-sessions" style={styles.link}>
          Ongoing Sessions
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
    color: 'green',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  linksContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: 'green',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
  optionsContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  inputField: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
    boxSizing: 'border-box',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  optionButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  additionalLinksContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
};

export default WelcomePage;