import React from 'react'
import { BiUser } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
import { RiLockPasswordLine } from 'react-icons/ri'

function Login() {
  return (
    <>
      <div className="justify-center items-center min-h-screen flex flex-col bg-gradient-to-b from-green-600 to-blue-600">
        <div className="px-6 py-6 opacity-80 rounded-lg text-center bg-gray-300">
          <span className="flex justify-center">
            <i className="text-5xl text-center">
              <TiStarFullOutline />
            </i>
          </span>
          <form className="flex flex-col gap-3">
            <h2 className="text-2xl">Log In</h2>
            <p>Please login to your account</p>
            <div className="flex flex-row">
              <div className="text-3xl">
                <i>
                  <BiUser />
                </i>
              </div>
              <input
                type="text"
                placeholder="Username"
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <div className="flex flex-row">
              <div className="text-3xl">
                <i>
                  <RiLockPasswordLine />
                </i>
              </div>
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <button>LOG IN</button>
            <div>
              <label>Don't have an account?</label>
              <button>SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
