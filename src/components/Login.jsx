import React from 'react'
import { BiUser } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className="justify-center items-center min-h-screen flex flex-col bg-bg-img bg-cover">
        <div className="px-10 pb-10 opacity-70 rounded-lg text-center bg-slate-50 text-black hover:opacity-80">
          <span className="flex justify-center">
            <i className="text-6xl text-center text-yellow-300 py-6">
              <TiStarFullOutline />
            </i>
          </span>
          <form className="flex flex-col gap-3">
            <h2 className="text-3xl">Log In</h2>
            <p className="pb-6">Please login to your account</p>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <BiUser />
                </i>
              </div>
              <input
                type="text"
                placeholder="Username *"
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <RiLockPasswordLine />
                </i>
              </div>
              <input
                type="password"
                placeholder="Password *"
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
          </form>
          <div className="flex flex-col mt-3">
            <button className="bg-black text-gray-400 px-1 py-1 rounded-full hover:bg-gray-600 hover:text-white w-64">
              LOG IN
            </button>
            <label className="">Don't have an account?</label>
            <Link to="/sign-up">
              <button className="bg-black text-gray-400 px-1 py-1 rounded-full hover:bg-gray-600 hover:text-white w-64">
                CREATE A FREE ACCOUNT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
