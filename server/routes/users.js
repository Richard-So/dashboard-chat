const express = require('express')
const { User } = require('../../sequelize/models')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

router.post('/', async (req, res) => {})
