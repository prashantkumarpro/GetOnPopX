import React from 'react'
import { Outlet } from 'react-router'
import BottomHeader from './components/BottomHeader'

const Root = () => {
  return (
    <div className='bg-white'>
      <div className='px-4 '>
        <Outlet />
      </div>
      <div className='fixed bottom-0 left-0 w-full bg-white shadow-md'>
        <BottomHeader />
      </div>
    </div>
  )
}

export default Root
