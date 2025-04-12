import React, { useEffect, useState } from 'react'
import '../styles/dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('Loading...');
  const navigate = useNavigate()
  const fileFirClicked = async(e)=>{
    navigate('/filefir')
  }
  const CheckstatusClicked = async(e)=>{
    navigate('/checkstatus', { state: { username } })
  }
  const bookAppClicked = async(e)=>{
    navigate('/bookapp')
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/getuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')  // send token from localStorage
          }
        });

        const data = await res.json();

        if (res.ok) {
          setUsername(data.username);
        } else {
          console.error(data.error);
          setUsername('User not found');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setUsername('Error');
      }
    };

    fetchUser();
  }, []);
  return (
    <div className='dash'>
      <div className="profile">
        <img src="/icons/blank-profile-picture-973460_960_720.webp" alt="dp" />
        <div className="username">{username}</div>
      </div>
      <div class="sho_container">
          <div class="btn sho_btn">
              <button className="insider_btn" onClick={fileFirClicked}>File FIR</button>
          </div>
          <div class="btn user_btn">
              <button className="insider_btn" onClick={CheckstatusClicked}>Check Status</button>
          </div>
          <div class="btn user_btn">
              <button className="insider_btn" onClick={bookAppClicked}>Book Appointment</button>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
