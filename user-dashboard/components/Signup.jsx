import React, { useState } from 'react';
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked")
    const res = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
      
    });

    const json = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      navigate('/');
    } else {
      alert(json.error || "Signup failed.");
    }
  };

  return (
    <div className="signup flex">
      <div className="hd">Signup</div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input type="password" placeholder="Password" value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}