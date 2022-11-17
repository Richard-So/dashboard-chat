import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="min-h-screen w-screen">
        <div className="flex flex-col m-3 p-3">
          <h2 className="text-2xl">DASHBOARD</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
