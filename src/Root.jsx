import React from 'react'
import { Outlet } from 'react-router'
import BottomHeader from './components/BottomHeader'

const Root = () => {
  return (
    <div className=''>
      <div className='px-4 bg-gray-50'>
        <Outlet />
      </div>
      <div className='fixed bottom-0 left-0 w-full shadow-md'>
        <BottomHeader />
      </div>
    </div>
  )
}

export default Root
