import React, { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate(); // Changed variable name
  const users = JSON.parse(localStorage.getItem('users')); // Moved users retrieval out of login function

  function logout() {
    localStorage.removeItem('loggedin'); // Fixed typo in localStorage key
    navigate('/');
  }

  function login() {
    let i = 0;
    for (const user of users) {
      if (user.username === username && user.password === password) {
        i++;
      }
    }
    if (i === 1) {
      alert('Login Successful');
      localStorage.setItem('loggedin', 'loggedin');
      navigate('/dashboard');
    } else {
      alert('Invalid Login');
    }
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>Facebook</h1>
        </div>
        <div className="col-md-6">
          {localStorage.getItem('loggedin') ? (
            <button onClick={logout}>LOGOUT</button>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <button onClick={login}>Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
