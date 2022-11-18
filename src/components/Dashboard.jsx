import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">DASHBOARD</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full w-full items-center justify-evenly">
          <div className="flex flex-col w-[45%] h-full justify-evenly">
            <div className="h-[40%] bg-slate-800  ">equity graph</div>
            <div className="h-[40%] bg-slate-800  ">NZX</div>
          </div>
          <div className="h-[87%] w-[45%] bg-slate-800">chat</div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
