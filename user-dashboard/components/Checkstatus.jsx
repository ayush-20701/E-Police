import React from 'react'
import '../styles/checkstatus.css'
import { useLocation } from 'react-router-dom';

const Checkstatus = () => {
  const location = useLocation();
  const username = location.state?.username || 'Guest';
  return (
    <div className='dash'>
      <div className="profile">
        <img src="/icons/blank-profile-picture-973460_960_720.webp" alt="dp" />
        <div className="username">{username}</div>
      </div>
      <div class="form_container">
          <form className='sho_btn' action="">
            <input className='input' type="text" placeholder='Enter your case ID'/>
            <button className='submitbtn sho-btn' type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Checkstatus
