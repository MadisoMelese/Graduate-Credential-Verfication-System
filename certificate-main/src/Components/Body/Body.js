import React from 'react'
import '../Body/Body.css'

const Body = ({children}) => {
  return (
    <div>
            <div className='body-main'>
              <div className='body-card'>
                {children}
              </div>
            </div>

    </div>
  )
}

export default Body
