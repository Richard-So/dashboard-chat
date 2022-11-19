const express = require('express')
const path = require('path')
const users = require('./routes/users')
const nzx = require('./routes/nzx')
const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/users', users)
server.use('/api/v1/nzx', nzx)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
