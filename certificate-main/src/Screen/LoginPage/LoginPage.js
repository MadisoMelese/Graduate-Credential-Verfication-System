import React , {useState}from 'react'
import '../LoginPage/Login.css'
import axios from 'axios';



function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(process.env.REACT_APP_BASE_URL);
        
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, { username, password });
        console.log(res)
        localStorage.setItem('token', res.data.token);
        if (res.data.role === 'admin') {
            window.location.href = '/admin';
        } else {
            window.location.href = '/student';
        }
        console.log("try block");
    } catch (err) {
        console.error('Login error:', err.response ? 'error 1' : err);
    }
};

  return (<div className='maindiv'>
    <div className="login-container">
    <h2>Login</h2>
    <form  onSubmit={handleSubmit}>
        <div className="input-group">
            <label >Username</label>
            <input type="text" id="email" name="email" required 
            value={username} onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="input-group">
            <label >Password</label>
            <input type="password" id="password" name="password" required 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
        </div>
        <button type="submit">Login</button>
    </form>
</div>
</div>
  )
}

export default LoginPage
