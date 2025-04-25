import React from 'react'
import { Outlet } from 'react-router'
import BottomHeader from './components/BottomHeader'

const Root = () => {
  return (
    <div>
      <Outlet />
      <BottomHeader />
    </div>
  )
}

export default Root
