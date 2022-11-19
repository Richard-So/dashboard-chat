import React from 'react'

function EditUser() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">USER SETTINGS</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full flex-grow border-2 border-solid border-white m-5">
          <div className="h-full w-full bg-slate-800">
            <div className="m-5">
              <div className="text-3xl italic font-bold text-green-400">
                RICHARD SO
              </div>
              <div className="text-xl italic">Admin / Individual Account</div>
            </div>
            <div className="m-5">
              <div className="text-2xl border-b-2 border-solid border-white">
                PERSONAL DETAILS
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser
