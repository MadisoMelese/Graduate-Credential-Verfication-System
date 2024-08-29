import React , {useState}from 'react'
import '../LoginPage/Login.css'

function LoginPage() {
<<<<<<< HEAD
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
axios.defaults.withCredentials=true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('https://certificate-verificationn-system-api.vercel.app/login', { username, password });
        localStorage.setItem('token', res.data.token);
        if (res.data.role === 'admin') {
            window.location.href = '/admin';
        } else {
            window.location.href = '/student';
        }
        console.log("try block");
    } catch (err) {
        console.error('Login error:', err.response ? 'error 1' : 'error 2');
    }
};

=======
  
>>>>>>> parent of e1ce92e (login backend integrated)
  return (<div className='maindiv'>
    <div className="login-container">
    <h2>Login</h2>
    <form  method="POST">
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
