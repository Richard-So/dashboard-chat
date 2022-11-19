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
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full border-2 border-solid border-white m-5">
          <div className="col-start-1 row-span-1 col-span-1 border-2 border-solid border-green-800">
            equity graph
          </div>
          <div className="col-start-1 row-span-1 col-span-1 border-2 border-solid border-red-800">
            equity status
          </div>
          <div className="col-start-2 row-start-1 border-2 row-span-2 col-span-1 border-solid border-orange-800">
            chat
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
