import React, { useState } from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log("Login Successfully");
    // You can add actual login logic here
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary login-btn">
          Login
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
      <p>
        Don't have an account?{' '}
        <button className="btn btn-link p-0" onClick={navigateToRegister}>
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;
