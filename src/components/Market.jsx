import React from 'react'

function Market() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col mt-5 pl-7">
            <h2 className="text-2xl">NZX MARKET</h2>
            <h3 className="text-green-400 text-xs">
              Welcome to your dashboard
            </h3>
          </div>
          <div>SEARCH:BLAHBLAHBLAH</div>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full border-2 border-solid border-white m-5">
          <div className="row-start-1 row-span-1 col-span-4 border-2 border-solid border-green-800">
            YOUR PORTFOLIO
          </div>
          <div className="row-start-2 col-start-1 row-span-4 col-span-4 border-2 border-solid border-red-800">
            HOLDINGS
          </div>
        </div>
      </div>
    </>
  )
}

export default Market
