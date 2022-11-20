import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { getSymbolDetails } from '../api/nzx'
import MyResponsiveLine from './MyResponsiveLine'

function Equity() {
  const navigate = useNavigate()
  const { symbol } = useParams()
  const [searchSymbol, setSearchSymbol] = useState(symbol)
  const symbolDetails = useQuery(
    ['symbolDetails'],
    () => getSymbolDetails({ symbol }),
    { staleTime: 1000 }
  )

  if (symbolDetails.isLoading)
    return <span className="text-4xl text-gray-300 m-5">Loading...</span>

  if (symbolDetails.isError) return <span>Error: {error.message}</span>

  function handleChange(e) {
    setSearchSymbol(e.target.value)
  }
  async function submit() {
    console.log(searchSymbol)
    redirect(`/market/${searchSymbol}`)
    setSearchSymbol('')
  }
  function handleClick(e) {
    e.preventDefault()
    submit()
  }

  function handleKeyUp(e) {
    e.preventDefault()
    e.key === 'Enter' ? submit() : null
  }

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
          <form className="flex items-center mt-5 mr-5">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:texr-bborder-b-2 dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search"
                onChange={handleChange}
                value={searchSymbol}
                onKeyUp={handleKeyUp}
                required
              />
            </div>
            <button
              onClick={handleClick}
              className="p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full border-2 border-solid border-black m-5">
          <div className="row-start-1 row-span-1 col-span-4 border-2 border-solid border-green-800 flex flex-row items-center ">
            <div className="w-[15%] text-3xl justify-center items-center text-center flex flex-col  ">
              <div className="text-green-400">{symbol.toUpperCase()}</div>
              <div className="flex flex-row ">
                <div className="text-2xl">Price: </div>
                <div className="text-2xl text-red-400">
                  ${symbolDetails.data.price}
                </div>
              </div>
            </div>
            <div className="w-[85%] text-sm">
              {`${symbolDetails.data.businessSummary.slice(0, 500)}...`}
            </div>
          </div>
          <div className="row-start-2 col-start-1 row-span-4 col-span-3 bg-slate-200 text-black">
            <MyResponsiveLine data={symbolDetails.data.data} />
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
