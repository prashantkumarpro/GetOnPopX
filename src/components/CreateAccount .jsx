import React, { useState } from 'react'
import FormInput from './FormInput' // import reusable input
import { useNavigate } from 'react-router'

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const nvigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAccount = e => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    localStorage.setItem('userData', JSON.stringify(formData))
    console.log('Account Created:', formData)
    setTimeout(() => {
      setIsLoading(false)
      alert('Account Created!')
      nvigate('/profile')
    }, 1000)
  }

  return (
    <div className='min-h-screen  flex items-center justify-center px-4'>
      <div className='w-full max-w-sm'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
          Create your PopX account
        </h2>

        <form onSubmit={handleAccount} className='space-y-6 mt-6'>
          <FormInput
            label='Full Name'
            name='fullname'
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <FormInput
            label='Phone Number'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <FormInput
            label='Email Address'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormInput
            label='Company Name'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
          />

          {/* Agency Selection */}
          <fieldset className='mt-4'>
            <legend className='text-sm text-left font-medium text-violet-600 mb-2'>
              Are you an Agency?<span className='text-red-500'>*</span>
            </legend>
            <div className='flex items-center space-x-6 mt-1'>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='isAgency'
                  value='yes'
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className='form-radio text-violet-600'
                />
                <span className='ml-2 text-sm text-gray-700'>Yes</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='isAgency'
                  value='no'
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className='form-radio text-violet-600'
                />
                <span className='ml-2 text-sm text-gray-700'>No</span>
              </label>
            </div>
          </fieldset>

          <button
            type='submit'
            className='w-full mt-6 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-md'
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
