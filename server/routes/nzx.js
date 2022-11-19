const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

// GET /api/v1/nzx for current price of a ticker
router.get('/', async (req, res) => {
  try {
    const { symbol } = req.body
    const { text } = await request.get(
      `https://finance.yahoo.com/quote/${symbol}/`
    )
    const searchTerm = 'Fw(b) Fz(36px) Mb(-4px) D(ib)'
    const firstIndex = text.indexOf(searchTerm)
    const secondIndex = text.indexOf('value', firstIndex)
    const thirdIndex = text.indexOf('active', firstIndex)

    const retrieved = text.slice(secondIndex, thirdIndex)
    const fourthIndex = retrieved.indexOf('"')
    const fifthIndex = retrieved.indexOf('"', fourthIndex + 1)

    const value = Number(retrieved.slice(fourthIndex + 1, fifthIndex))
    res.json(value)
  } catch (error) {
    console.error(error)
  }
})

router.get('/history', async (req, res) => {
  try {
    const { symbol } = req.body
    const data = await request.get(
      `/quote/${symbol}/history?period1=${period1}&period2=${period2}&interval=${frequency}&filter=history&frequency=${frequency}`
    )
  } catch (error) {}
})
