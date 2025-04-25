import React from 'react'
import { Outlet } from 'react-router'
import BottomHeader from './components/BottomHeader'

const Root = () => {
  return (
    <div>
      <div className='px-4 py-2'>
        <Outlet />
      </div>
      <BottomHeader />
    </div>
  )
}

export default Root
