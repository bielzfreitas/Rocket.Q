const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

//function - requisição / resposta
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

//Room
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//Question
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

//precisa exportar o route
module.exports = route
