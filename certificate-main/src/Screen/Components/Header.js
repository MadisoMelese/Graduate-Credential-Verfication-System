import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='sub-container'>
            <div className="profile"></div>
            <div className="logout">
                <p>Log out</p>
            </div>
        </div>
    </div>
  )
}

export default Header