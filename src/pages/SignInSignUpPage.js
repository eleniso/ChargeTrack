import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInSignUpPage.css';

function SignInSignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to the Home Page on success
        navigate('/home', { state: { user: data.user } });
      } else {
        // Show error message from backend
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Inavlid email or password');
    }
  };

  return (
    <div className="signin-signup-page">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      {/* Display error message if sign-in fails */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default SignInSignUpPage;