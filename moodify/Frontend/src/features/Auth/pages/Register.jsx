import React, { useState } from 'react'
import newlogo from '../../../assets/newlogo.png'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const navigate = useNavigate()
  const { loading, handleRegister } = useAuth()
  const [error, setError] = useState('')

  async function submitHandler(e) {
    e.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    const result = await handleRegister({
      username,
      email,
      password
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  }

  return (
    <div className='register-page'>
      <div className="music-notes">
        <span>♪</span>
        <span>♫</span>
        <span>♬</span>
        <span>♩</span>
        <span>♫</span>
      </div>
      <div className="upper">
        <img src={newlogo} alt="" />
        <h1>
          <span>Ready to listen</span>
          <span>for your mood?</span>
        </h1>
      </div>
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' placeholder='Enter your username'
            value={username} onChange={(e) => setusername(e.target.value)}
            autoComplete="off" />
          <label htmlFor="email">Email address</label>
          <input type="email" id='email' placeholder='Enter your email'
            value={email} onChange={(e) => setemail(e.target.value)}
            autoComplete="off" />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enter your password'
            value={password} onChange={(e) => setpassword(e.target.value)}
            autoComplete="off" />
          {
            error && (
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}
              >
                {error}
              </p>
            )
          }
          <button disabled={loading}>Register</button>
        </form>
        <h3>Already have an account? <a href="/login">Login</a></h3>
      </div>
    </div>
  )
}

export default Register