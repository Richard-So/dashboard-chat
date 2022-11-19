import React from 'react'

function EditUser() {
  return (
    <>
      <div className="h-screen w-full flex flex-col  ">
        <div className="flex flex-col mt-5 pl-7">
          <h2 className="text-2xl">USER SETTINGS</h2>
          <h3 className="text-green-400 text-xs">Welcome to your dashboard</h3>
        </div>
        <div className="flex flex-row h-full w-full items-center justify-evenly">
          <div className="h-full w-full bg-slate-800">
            <div>
              <div>RICHARD SO</div>
              <div>Admin / Individual Account</div>
            </div>
            <div>
              <div>PERSONAL DETAILS</div>
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
