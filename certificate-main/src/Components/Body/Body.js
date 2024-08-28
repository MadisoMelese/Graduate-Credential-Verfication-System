import React from 'react'
import '../Body/Body.css'
import { useNavigate } from 'react-router-dom'

const Body = ({children}) => {
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/');
  };
  return (
    <div>
            <div className='body-main'>
            <div className="logout"  onClick={goToHome}>
                <p>Log out</p>
            </div>
              <div className='body-card'>
                {children}
              </div>
            </div>

    </div>
  )
}
export default Body