import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Chat from './Chat'
import Market from './Market'
import Profile from './Profile'
import EditProfile from './EditProfile'
import HallOfFame from './HallOfFame'

function Home() {
  return (
    <>
      <div className="bg-bg-img2 bg-cover min-h-screen flex">
        <Nav />
        <main>
          <Routes>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="chat" element={<Chat />} />
              <Route path="market" element={<Market />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/:userName" element={<EditProfile />} />
              <Route path="hall-of-fame" element={<HallOfFame />} />
            </Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default Home
