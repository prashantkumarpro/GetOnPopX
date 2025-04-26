import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { MdAddAPhoto } from 'react-icons/md'

const Profile = () => {
  const [userData, setUserData] = useState({})
  const [profilePic, setProfilePic] = useState(null)
  const navigate = useNavigate()

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

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('profilePic')
    navigate('/login')
  }

  return (
    <div className='w-full max-w-sm  shadow-md rounded-md p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='flex items-start   space-x-4'>
        <div className='relative group'>
          <div className='size-20 rounded-full bg-gray-200 overflow-hidden'>
            <img
              src={
                profilePic ||
                'https://via.placeholder.com/150x150.png?text=Upload'
              }
              alt='pic'
              className='size-full object-cover'
            />
          </div>

          {/* Upload Icon */}
          <div className='absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white cursor-pointer'>
            <label htmlFor='upload' className='cursor-pointer'>
              <MdAddAPhoto />

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
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className='mt-6 w-full bg-red-500 text-white py-2 text-sm font-medium rounded hover:bg-red-600 transition'
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
