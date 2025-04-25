import { Link } from 'react-router'
import { RiHome3Fill } from 'react-icons/ri'
import { FiLogIn } from 'react-icons/fi'
import { SiGnuprivacyguard } from 'react-icons/si'
import { GiEgyptianProfile } from 'react-icons/gi'

const BottomHeader = () => {
  return (
    <div className=' w-full max-w-sm m-auto'>
      <div className='flex items-center justify-between mt-4 gap-2 absolute bottom-0 w-full max-w-sm bg-white p-2 border-t border-gray-200 px-4'>
        {/* Home */}
        <Link
          to='/'
          className='relative group text-gray-600 hover:text-gray-800'
        >
          <RiHome3Fill className='text-2xl' />
          <span className='sr-only'>Home</span>
          <div className='absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition'>
            Home
          </div>
        </Link>

        {/* Login */}
        <Link
          to='/login'
          className='relative group text-gray-600 hover:text-gray-800'
        >
          <FiLogIn className='text-2xl' />
          <span className='sr-only'>Login</span>
          <div className='absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition'>
            Login
          </div>
        </Link>

        {/* Create Account */}
        <Link
          to='/create'
          className='relative group text-gray-600 hover:text-gray-800'
        >
          <SiGnuprivacyguard className='text-2xl' />
          <span className='sr-only'>Create</span>
          <div className='absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition'>
            Create
          </div>
        </Link>

        {/* Profile */}
        <Link
          to='/profile'
          className='relative group text-gray-600 hover:text-gray-800'
        >
          <GiEgyptianProfile className='text-2xl' />
          <span className='sr-only'>Profile</span>
          <div className='absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition'>
            Profile
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BottomHeader
