import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // Basic validation
    if (!email || !password) {
      setError('Email and Password are required')
      return
    }

    // Handle the login logic
    console.log('Logging in with', { email, password })

    // Clear the form after submission
    setEmail('')
    setPassword('')
    setError('')
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='text-sm font-medium text-gray-900'
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder='Enter your password'
          />
        </div>
        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
