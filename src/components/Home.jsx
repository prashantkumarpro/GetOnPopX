import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-sm text-center'>
        <h1 className='text-xl font-semibold text-gray-900 mb-2'>
          Welcome to PopX
        </h1>
        <p className='text-sm text-gray-600 mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link
          to='/create'
          className='w-full  block bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md text-sm font-medium mb-2'
        >
          Create Account
        </Link>
        <Link
          to='/login'
          className='w-full bg-violet-100 block hover:bg-violet-200 text-violet-700 py-2 rounded-md text-sm font-medium'
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}

export default Home
