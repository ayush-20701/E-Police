import React from 'react'
import '../styles/homepage.css'
import LoginForm from './Signin'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <img src="/icons/flag-flags-india-indian-wallpaper-preview.jpg" alt="Indian Flag" />
        <button className="anonym">File FIR as Anonymous</button>
      </div>
      <div className="right">
        <LoginForm/>
      </div>
    </div>
  )
}

export default HomePage
