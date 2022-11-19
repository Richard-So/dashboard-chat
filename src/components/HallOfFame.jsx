import React from 'react'

function HallOfFame() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">HALL OF FAME</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full w-full items-center justify-evenly">
          <div className="h-full w-full bg-slate-800">LIST OF USERS</div>
        </div>
      </div>
    </>
  )
}

export default HallOfFame
