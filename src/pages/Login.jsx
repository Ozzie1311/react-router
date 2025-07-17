import { LuCircleUserRound } from 'react-icons/lu'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import '../Styles/Login.css'

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginFormData)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  console.log(loginFormData)
  return (
    <section className='form-login'>
      <h1 className='form-login-title'>Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='oswaldo@oswaldo.com'
          name='email'
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button>Sign in</button>
      </form>
      <p className='form-p'>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </section>
  )
}
