import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { TiStarFullOutline } from 'react-icons/ti'
import { RiLockPasswordLine, RiProfileLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { signUpRequest } from '../api/user'

function SignUp({ setSignUp }) {
  const navigate = useNavigate()

  const [signUpForm, setSignUpForm] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: 'Individual Account',
  })

  function handleChange(e) {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    })
  }
  async function submit() {
    const result = await signUpRequest(signUpForm)
    setSignUpForm({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    })
    console.log(result)
    setSignUp(() => false)
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
      <div className="justify-center items-center min-h-screen flex flex-col bg-bg-img8 bg-cover">
        <div className="px-10 pb-10 opacity-70 rounded-lg text-center bg-slate-50 text-black hover:opacity-80">
          <span className="flex justify-center">
            <i className="text-6xl text-center text-yellow-300 py-6">
              <TiStarFullOutline />
            </i>
          </span>
          <form className="flex flex-col gap-3">
            <h2 className="text-3xl">Sign Up</h2>
            <p className="pb-6">Please fill in the details below</p>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <BiUser />
                </i>
              </div>
              <input
                type="text"
                placeholder="Username *"
                name="username"
                onChange={handleChange}
                value={signUpForm.username}
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
                name="password"
                onChange={handleChange}
                value={signUpForm.password}
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <RiProfileLine />
                </i>
              </div>
              <input
                type="text"
                placeholder="First name *"
                name="firstName"
                onChange={handleChange}
                value={signUpForm.firstName}
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <RiProfileLine />
                </i>
              </div>
              <input
                type="text"
                placeholder="Last name *"
                name="lastName"
                onChange={handleChange}
                value={signUpForm.lastName}
                required
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <div className="flex flex-row pb-3">
              <div className="text-3xl">
                <i>
                  <HiOutlineMail />
                </i>
              </div>
              <input
                type="email"
                placeholder="user@example.com *"
                name="email"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                value={signUpForm.email}
                required
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                className="bg-gray-200 border-none outline-none pl-3 ml-3 rounded-full focus:bg-white"
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-black text-gray-400 px-1 py-1 rounded-full hover:bg-gray-600 hover:text-white"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
