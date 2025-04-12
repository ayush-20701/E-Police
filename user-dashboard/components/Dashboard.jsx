import React from 'react'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dash'>
      <div className="profile">
        <img src="/icons/blank-profile-picture-973460_960_720.webp" alt="dp" />
        <div className="username">Your Username</div>
      </div>
      <div class="sho_container">
          <div class="btn sho_btn">
              <button class="insider_btn">File FIR</button>
          </div>
          <div class="btn user_btn">
              <button class="insider_btn">Check Status</button>
          </div>
          <div class="btn user_btn">
              <button class="insider_btn">Book Appointment</button>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
