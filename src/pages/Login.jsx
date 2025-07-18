import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../../api'
import '../Styles/Login.css'

export const Login = () => {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const location = useLocation()

  const message = location.state?.message || ''
  const from = location.state?.from || '/host'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await loginUser(loginFormData)
      setLoginFormData(response)
      setError(null)
      window.localStorage.setItem('loggedin', true)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err)
    } finally {
      setStatus('idle')
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <section className='form-login'>
      {message && <p className='auth-message'>{message}</p>}
      <h1 className='form-login-title'>Sign in to your account</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type='email'
          placeholder='oswaldo@oswaldo.com'
          name='email'
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
          value={loginFormData.password}
        />
        {error && <p className='error-p'>{error.message}</p>}
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Loggin in...' : 'Sign in'}
        </button>
      </form>
      <p className='form-p'>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </section>
  )
}
