import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()

const LogInForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data;
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
      data = await response.json();
      console.log(data)
      if(response.ok) {
        // const token = data.token;
        // localStorage.setItem('token', token);
        navigate('/profile');
        console.log(navigate)
      } else {
        console.error(`Login failed`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="login-form">

      <form onSubmit={handleSubmit}>
        <section className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </section>
        <section className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </section>
        <section className="form-group">
          <button type="submit">Login</button>
        </section>
      </form>
    </section>
  );
}

export default LogInForm;
