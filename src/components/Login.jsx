import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    setIsLoading(true)
    setError(null) // reset previous errors if any

    const userData = JSON.parse(localStorage.getItem('userData'))

    if (!email || !password) {
      setError('Please enter both email and password.')
      setIsLoading(false)
      return
    }

    if (!userData) {
      setError('No account found. Please create an account.')
      setIsLoading(false)
      return
    }

    if (userData.email !== email) {
      setError('Email not found. Please try again or create an account.')
      setIsLoading(false)
      return
    }

    if (userData.password !== password) {
      setError('Incorrect password. Please try again.')
      setIsLoading(false)
      return
    }

    // Successful login
    setTimeout(() => {
      alert('Login Successful!')
      setIsLoading(false)
      navigate('/profile')
    }, 1000)
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-sm'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
          Signin to your PopX account
        </h2>
        <p className='text-sm text-gray-600 mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
        <p className='text-sm text-gray-500 mb-2'>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/create')}
            className='text-violet-600 cursor-pointer'
          >
            Create an account
          </span>
        </p>
        <form onSubmit={handleLogin} className='space-y-4'>
          <fieldset className='relative border border-gray-300 rounded-md px-3 pt-4 pb-2 focus-within:ring-2 focus-within:ring-violet-500'>
            <legend className='absolute -top-3 left-2 text-sm px-1 bg-gray-50 text-violet-600 font-medium'>
              Email
            </legend>
            <input
              type='email'
              onChange={e => setEmail(e.target.value)}
              className='w-full bg-transparent border-none text-sm text-gray-800 placeholder-transparent focus:outline-none'
              placeholder='Enter email address'
              required
            />
          </fieldset>
          <fieldset className='relative border border-gray-300 rounded-md px-3 pt-4 pb-2 focus-within:ring-2 focus-within:ring-violet-500'>
            <legend className='absolute -top-3 left-2 text-sm px-1 bg-gray-50 text-violet-600 font-medium'>
              Password
            </legend>
            <input
              type='password'
              onChange={e => setPassword(e.target.value)}
              className='w-full bg-transparent border-none text-sm text-gray-800 placeholder-transparent focus:outline-none'
              placeholder='Enter password'
              required
            />
          </fieldset>

          <button
            type='submit'
            disabled={isLoading}
            className={`w-full block py-2 ${
              isLoading ? 'bg-violet-300' : 'bg-violet-600 hover:bg-violet-700'
            } text-white text-sm text-center font-medium rounded-md cursor-pointer`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
