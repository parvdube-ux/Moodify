import React, { useState } from 'react'
import newlogo from '../../../assets/newlogo.png'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loading, handleLogin } = useAuth()
  const navigate = useNavigate()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [error, setError] = useState('')

  async function submitHandler() {

    setError("");

    const result =
      await handleLogin({
        username,
        email,
        password
      });

    if (!result.success) {

      setError(
        result.message
      );

      return;
    }

    navigate("/");

  }

  return (
    <div className='login-page'>
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
          <span>Let's go</span>
          <span>Moodifying!</span>
        </h1>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' placeholder='Enter your username'
            value={username} onChange={(e) => setusername(e.target.value)}
            autoComplete="off" />
          <div className="input-separator">Or</div>
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
                  fontWeight: "bold"
                }}
              >
                {error}
              </p>
            )
          }
          <button
            type='button'
            disabled={loading}
            onClick={submitHandler}
          >Login</button>
        </form>
        <h3>New to us? <a href="/register">Register</a></h3>
      </div>
    </div>
  )
}

export default Login