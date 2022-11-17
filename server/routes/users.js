const express = require('express')
const { User } = require('../../sequelize/models')

const router = express.Router()

module.exports = router

// GET /api/v1/users
router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

// POST /api/v1/users/authentication

router.post('/loginRequest', async (req, res) => {
  try {
    const { username, password } = req.body // {username:admin, password:admin1234}
    const users = await User.findOne({
      where: {
        username,
        password,
      },
    })
    users === null ? (res.json(users), res.sendStatus(401)) : res.json(users)
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/signUp', async (req, res) => {
  try {
    const { username, password, firstName, email } = req.body // {username:admin, password:admin1234}
    const users = await User.create({
      username,
      password,
      first_name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      email,
    })
    users === null
      ? (res.json(users), res.sendStatus(401))
      : res.sendStatus(201)
  } catch (error) {
    console.error(error.message)
  }
})

// router.post('/', async (req, res) => {})
