import React from 'react'

function LiveTransactions() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">TRADE ACITIVITY</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full flex-grow border-2 border-solid border-white m-5">
          <div className="h-full w-full bg-slate-800">trade history</div>
        </div>
      </div>
    </>
  )
}

export default LiveTransactions
