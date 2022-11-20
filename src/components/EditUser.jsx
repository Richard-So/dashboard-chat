import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { editUser } from '../api/user'

function EditUser() {
  const queryClient = useQueryClient()

  const token = useQuery('token', () =>
    JSON.parse(localStorage.getItem('token'))
  )

  const user = useQuery(['user'], () => editUser(token.data))

  if (user.isLoading)
    return <span className="text-4xl text-gray-300 m-5">Loading...</span>

  if (user.isError) return <span>Error: {error.message}</span>

  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">USER SETTINGS</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full flex-grow  m-5">
          <div className="h-full w-full bg-slate-800">
            <div className="m-5">
              <div className="text-3xl italic font-bold text-green-400">
                {`${user.data.first_name} ${user.data.last_name}`}
              </div>
              <div className="text-xl italic">{user.data.role}</div>
            </div>
            <div className="m-5">
              <div className="text-2xl border-b-2 border-solid border-white">
                PERSONAL DETAILS
              </div>
              <div className="flex flex-col m-5">
                <div className="flex flex-row justify-between my-5">
                  <div className="w-1/3 ">Name</div>
                  <div className="w-1/3 ">{`${user.data.first_name} ${user.data.last_name}`}</div>
                  <div className="w-1/3 "></div>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <div className="w-1/3 ">Email</div>
                  <div className="w-1/3 ">{user.data.email}</div>
                  <div className="w-1/3 text-right">Edit</div>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <div className="w-1/3 ">Mobile Number</div>
                  <div className="w-1/3 ">{user.data.mobile_number}</div>
                  <div className="w-1/3 text-right">Edit</div>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <div className="w-1/3 ">Username</div>
                  <div className="w-1/3 ">{user.data.username}</div>
                  <div className="w-1/3 text-right">Edit</div>
                </div>
                <div className="flex flex-row justify-between my-5">
                  <div className="w-1/3 ">Password</div>
                  <div className="w-1/3 ">*******</div>
                  <div className="w-1/3 text-right">Edit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser
