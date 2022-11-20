const express = require('express')
const request = require('superagent')
const { today, tenDaysAgo, dateToUnix, unixToDate } = require('../../date')

const router = express.Router()

module.exports = router

function findPrice(text) {
  const searchTerm = 'Fw(b) Fz(36px) Mb(-4px) D(ib)'
  const firstIndex = text.indexOf(searchTerm)
  const secondIndex = text.indexOf('value', firstIndex)
  const thirdIndex = text.indexOf('active', firstIndex)

  const retrieved = text.slice(secondIndex, thirdIndex)
  const fourthIndex = retrieved.indexOf('"')
  const fifthIndex = retrieved.indexOf('"', fourthIndex + 1)
  const price = Number(retrieved.slice(fourthIndex + 1, fifthIndex))
  return price
}

function findSummary(text) {
  const searchTerm = 'longBusinessSummary'
  const firstIndex = text.indexOf(searchTerm)
  const secondIndex = text.indexOf(':"', firstIndex)
  const thirdIndex = text.indexOf('","city', firstIndex)

  const summary = text.slice(secondIndex + 2, thirdIndex)
  return summary
}

// POST /api/v1/nzx for symbol details
router.post('/', async (req, res) => {
  try {
    const { symbol } = req.body
    const { text } = await request.get(
      `https://finance.yahoo.com/quote/${symbol}.NZ/`
    )

    const price = findPrice(text)
    const businessSummary = findSummary(text)

    const period2 = dateToUnix(today())
    const period1 = tenDaysAgo()
    const frequency = '1d'

    const data = await request.get(
      `https://finance.yahoo.com/quote/${symbol}/history?period1=${period1}&period2=${period2}&interval=${frequency}&filter=history&frequency=${frequency}`
    )
    const processed = data.text
      .split('HistoricalPriceStore":{"prices":')[1]
      .split(',"isPending')[0]

    const graphData = JSON.parse(processed)
    const processedGraphData = [
      {
        id: 'close',
        color: 'hsl(208, 70%, 50%)',
        data: graphData.map((day) => {
          return { x: unixToDate(day.date), y: day.close }
        }),
      },
      {
        id: 'open',
        color: 'hsl(283, 70%, 50%)',
        data: graphData.map((day) => {
          return { x: unixToDate(day.date), y: day.close }
        }),
      },
      {
        id: 'high',
        color: 'hsl(235, 70%, 50%)',
        data: graphData.map((day) => {
          return { x: unixToDate(day.date), y: day.close }
        }),
      },
    ]

    const dataToSend = {
      price,
      businessSummary,
      data: processedGraphData,
    }

    res.json(dataToSend)
  } catch (error) {
    console.error(error)
  }
})

router.get('/history', async (req, res) => {
  try {
    const { symbol } = req.body
    const period2 = dateToUnix(today())
    const period1 = tenDaysAgo()
    const frequency = '1d'

    console.log(symbol, period2, period1, frequency)
    const data = await request.get(
      `https://finance.yahoo.com/quote/${symbol}/history?period1=${period1}&period2=${period2}&interval=${frequency}&filter=history&frequency=${frequency}`
    )
    const processed = data.text
      .split('HistoricalPriceStore":{"prices":')[1]
      .split(',"isPending')[0]

    res.json(JSON.parse(processed).slice(0, 10))
  } catch (error) {
    console.error(error)
  }
})
