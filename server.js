const express = require('express')
const app = express()
const PORT = 8000

const MongoClient = require('mongodb').MongoClient

let db,
  dbConnectionStr = 'mongodb+srv://demo:demo@cluster0.rphti.mongodb.net/todo-list?retryWrites=true&w=majority',
  dbName = 'todo-list'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName)
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
  db.collection('todo-list').find().toArray()
    .then(results => {
      response.render('index.ejs', { todos: results })
    })
    .catch(error => console.error(error))
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