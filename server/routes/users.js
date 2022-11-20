const express = require('express')
const { User, Portfolio } = require('../../sequelize/models')

const router = express.Router()

module.exports = router

function token(user) {
  return { username: user.username, password: user.password }
}

// GET /api/v1/users
router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

// POST /api/v1/users/authentication

router.post('/loginRequest', async (req, res) => {
  try {
    const { username, password } = req.body // {username:admin, password:admin1234}
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    })
    user === null
      ? (res.json(user), res.sendStatus(401))
      : res.json(token(user))
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/signUp', async (req, res) => {
  try {
    const { username, password, firstName, lastName, email } = req.body // {username:admin, password:admin1234}
    const users = await User.create({
      username,
      password,
      first_name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      last_name: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      email,
    })
    users === null
      ? (res.json(users), res.sendStatus(401))
      : res.sendStatus(201)
  } catch (error) {
    console.error(error.message)
  }
})

// for editing user details
router.post('/editUser', async (req, res) => {
  try {
    const { username, password } = req.body // {username:admin, password:admin1234
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    })
    user === null ? (res.json(user), res.sendStatus(401)) : res.json(user)
  } catch (error) {
    console.error(error.message)
  }
})

router.post('/portfolio', async (req, res) => {
  try {
    const { username } = req.body // {username:admin, password:admin1234
    const portfolio = await Portfolio.findAll({
      where: {
        username,
      },
    })
    portfolio === null
      ? (res.json(portfolio), res.sendStatus(401))
      : res.json(portfolio)
  } catch (error) {
    console.error(error.message)
  }
})
