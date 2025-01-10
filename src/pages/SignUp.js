import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      console.log('User Signed In:', formData);
    } else {
      console.log('User Signed Up:', formData);
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{isSignedIn ? 'Sign In' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {!isSignedIn && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
       <button 
       type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};
        

// Ενοποιημένα Στυλ
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#333',
      color: '#4CAF50',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: '#4CAF50',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '300px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
    },
  };
  export default SignUp;