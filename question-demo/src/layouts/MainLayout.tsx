import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout: FC = () => {
  return (
    <div>
      <div>Main Header</div>
      <div>
        {/* Outlet 类似于vue的slot */}
        <Outlet />
      </div>
      <div>Main Footer</div>
    </div>
  )
}
export default MainLayout
