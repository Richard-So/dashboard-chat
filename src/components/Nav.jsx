import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaUserAlt, FaHome, FaUserCog } from 'react-icons/fa'
import { BiTransferAlt } from 'react-icons/bi'
import { RiStockFill } from 'react-icons/ri'
import { AiOutlineStock } from 'react-icons/ai'
import { GiPodiumWinner } from 'react-icons/gi'

function Nav() {
  return (
    <Sidebar backgroundColor="#1e293b" className="min-h-screen">
      <div className="flex flex-col justify-center items-center text-center py-3">
        <h2 className="text-2xl py-3">ADMIN</h2>
        <i className="text-9xl border-2 border-solid border-slate-400 rounded-full p-9 bg-gray-400">
          <FaUserAlt />
        </i>
        <h2 className="text-lg pt-3 text-green-400">Richard</h2>
      </div>
      <Menu
        renderMenuItemStyles={() => ({
          '.menu-anchor': {
            backgroundColor: '#1e293b',
            '&:hover': {
              backgroundColor: '#334155',
            },
          },
        })}
        className="justify-center items-center flex flex-col text-left"
      >
        <MenuItem>
          <div className="flex flex-row mx-3 items-center">
            <i className="text-3xl pr-3 text-green-400">
              <FaHome />
            </i>
            <div>Dashboard </div>
          </div>
        </MenuItem>
        <div className="pl-4 py-4 text-gray-500">USER</div>
        <MenuItem>
          <div className="flex flex-row mx-3 items-center ">
            <i className="text-3xl pr-3 text-green-400">
              <FaUserCog />
            </i>
            <div> User Settings </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-row mx-3 items-center ">
            <i className="text-3xl pr-3 text-green-400">
              <BiTransferAlt />
            </i>
            <div> Trade Activity </div>
          </div>
        </MenuItem>
        <div className="pl-4 py-4 text-gray-500">MARKET</div>
        <MenuItem>
          <div className="flex flex-row mx-3 items-center ">
            <i className="text-3xl pr-3 text-green-400">
              <AiOutlineStock />
            </i>
            <div>NZX</div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-row mx-3 items-center ">
            <i className="text-3xl pr-3 text-green-400">
              <RiStockFill />
            </i>
            <div>Live Transactions</div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex flex-row mx-3 items-center ">
            <i className="text-3xl pr-3 text-green-400">
              <GiPodiumWinner />
            </i>
            <div>Hall of Fame </div>
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Nav
