const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000

let db,
  dbConnectionStr = process.env.DB_URI_STRING,
  dbName = 'todo-list'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName)
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (request, response) => {
  const todoItems = await db.collection('todo-list').find().toArray()
  const itemsLeft = await db.collection('todo-list').countDocuments({ done: false })
  response.render('index.ejs', { todos: todoItems, left: itemsLeft })
})

app.post('/createTodo', (request, response) => {
  db.collection('todo-list').insertOne({
    text: request.body.todoItem,
    done: false
  })
    .then(result => {
      response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.delete('/deleteTodo', (request, response) => {
  db.collection('todo-list').deleteOne({
    text: request.body.text
  })
    .then(result => {
      response.json('Deleted')
    })
    .catch(error => console.error(error))
})

app.put('/markTodo', (request, response) => {
  db.collection('todo-list').updateOne({
    text: request.body.text
  }, {
    $set: {
      done: request.body.state
    }
  }
  )
    .then(result => {
      response.json('Update')
    })

})

app.listen(process.env.PORT || PORT)