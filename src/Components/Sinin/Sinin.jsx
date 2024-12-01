import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Sinin.css';


const Sinin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navicate = useNavigate();
  
    const HandleUsername = (e) => {
      setUserName(e.target.value);
      console.log(username)
    }
    const HandlePassword = (e) => {
      setPassword(e.target.value);
  
    }
    const staticUser = {
      username: "Admin",
      password: "Admin"
    }
    const handlelogin = () => {
      if (staticUser.username === username && staticUser.password === password) {
        alert("welcome to my page")
        navicate("/login")

      } else {
        alert("Check Your Username Or password")
      }
    }





    return (
        <div className='sin_main'>
            <div className='left-section'>
                <h2>Sign In</h2>
                <form onSubmit={handlelogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Username"  onChange={HandleUsername} value={username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder='password' onChange={HandlePassword} value={password} />
                    </div>
                    <button type="submit" className="sign-in-btn">
                        Sign In
                    </button>
                    
                </form>
            </div>
            <div className='right-section'>
                <h2>Welcome to login</h2>
                <p>Don't have an account?</p>
                <button className="sign-up-btn">Sign Up</button>
            </div>
        </div>
    )
}

export default Sinin