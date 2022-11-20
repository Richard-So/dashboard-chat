import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import MyresponsivePie from './MyResponsivePie'

function Dashboard() {
  const queryClient = useQueryClient()
  // const token = useQuery(
  //   ['token'],
  //   () => JSON.parse(localStorage.getItem('token')),
  //   { staleTime: 60 * 5000 }
  // )
  const token = useQuery('token', () =>
    JSON.parse(localStorage.getItem('token'))
  )

  const data = [
    {
      id: 'stylus',
      label: 'stylus',
      value: 475,
      color: 'hsl(42, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 429,
      color: 'hsl(120, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 101,
      color: 'hsl(189, 70%, 50%)',
    },
    {
      id: 'sass',
      label: 'sass',
      value: 558,
      color: 'hsl(223, 70%, 50%)',
    },
    {
      id: 'make',
      label: 'make',
      value: 327,
      color: 'hsl(118, 70%, 50%)',
    },
  ]
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">DASHBOARD</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full border-2 border-solid border-white m-5">
          <div className="col-start-1 row-span-1 col-span-1 bg-slate-200">
            <MyresponsivePie data={data} />
          </div>
          <div className="col-start-1 row-span-1 col-span-1 border-2 border-solid border-red-800">
            equity status
          </div>
          <div className="col-start-2 row-start-1 border-2 row-span-2 col-span-1 border-solid border-orange-800">
            chat
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
