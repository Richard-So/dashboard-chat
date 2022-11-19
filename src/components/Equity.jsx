import React from 'react'

function Equity() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">NZX MARKET</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full border-2 border-solid border-white m-5">
          <div className="row-start-1 row-span-1 col-span-4 border-2 border-solid border-green-800">
            Equity detail
          </div>
          <div className="row-start-2 col-start-1 row-span-4 col-span-3 border-2 border-solid border-red-800">
            graph
          </div>
          <div className="row-start-2 col-start-4 row-span-4 col-span-1 border-2 border-solid border-orange-800">
            buy / Sell
          </div>
        </div>
      </div>
    </>
  )
}

export default Equity
