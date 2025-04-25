import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [userData, setUserData] = useState({})
  const [profilePic, setProfilePic] = useState(null)

  useEffect(() => {
    // Load user data and profile pic from localStorage on mount
    const storedUser = JSON.parse(localStorage.getItem('userData'))
    const storedImage = localStorage.getItem('profilePic')
    if (storedUser) setUserData(storedUser)
    if (storedImage) setProfilePic(storedImage)
  }, [])

  // Handle image upload
  const handleImageUpload = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePic(reader.result)
        localStorage.setItem('profilePic', reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='max-w-sm mx-auto bg-white shadow-md rounded-md p-4 mt-20'>
      <div className='flex items-start space-x-4'>
        <div className='relative group'>
          <div className='size-20 rounded-full bg-black overflow-hidden'>
            <img
              src={
                profilePic ||
                'https://via.placeholder.com/150x150.png?text=Upload'
              }
              alt='Profile'
              className='size-full object-cover'
            />
          </div>

          {/* Upload Icon */}
          <div className='absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white cursor-pointer'>
            <label htmlFor='upload' className='cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3 text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              <input
                id='upload'
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='hidden'
              />
            </label>
          </div>
        </div>

        {/* User Info */}
        <div>
          <p className='font-semibold text-sm text-gray-900'>
            {userData.fullname || 'Full Name'}
          </p>
          <p className='text-xs text-gray-500 mb-2'>
            {userData.email || 'email@example.com'}
          </p>
          <p className='text-xs text-gray-600 leading-tight'>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
