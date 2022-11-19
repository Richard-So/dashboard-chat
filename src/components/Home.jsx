import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Market from './Market'
import EditUser from './EditUser'
import HallOfFame from './HallOfFame'
import TradeActivity from './TradeActivity'
import LiveTransactions from './LiveTransactions'
import Equity from './Equity'

function Home() {
  return (
    <>
      <div className="h-screen w-screen flex bg-slate-900 text-white">
        <Nav />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="user" element={<EditUser />} />
            <Route path="trade-activity" element={<TradeActivity />} />
            <Route path="market" element={<Market />} />
            <Route path="market/:symbol" element={<Equity />} />
            <Route path="live-transactions" element={<LiveTransactions />} />
            <Route path="hall-of-fame" element={<HallOfFame />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default Home
