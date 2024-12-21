import React, { useState } from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';

const Register_Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log("Registration Successfully");
    // You can add actual registration logic here
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          Register
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
      <p>
        Already have an account?{' '}
        <button className="btn btn-link p-0" onClick={navigateToLogin}>
          Login
        </button>
      </p>
    </div>
  );
};

export default Register_Form;
