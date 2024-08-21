import React , {useState}from 'react'
import '../LoginPage/Login.css'

function LoginPage() {
  
  return (<div className='maindiv'>
    <div className="login-container">
    <h2>Login</h2>
    <form  method="POST">
        <div className="input-group">
            <label >Username</label>
            <input type="text" id="email" name="email" required 

            />
        </div>
        <div className="input-group">
            <label >Password</label>
            <input type="password" id="password" name="password" required 
            
            />
        </div>
        <button type="submit">Login</button>
    </form>
</div>
</div>
  )
}

export default LoginPage
