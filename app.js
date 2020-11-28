const express = require('express')
const app = express()
const port = 3000
const responseTime = require('response-time')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(responseTime((req, res, time) => {
  const nowTime = new Date().toLocaleString()
  console.log(`${nowTime} | ${req.method} from ${req.url} | total time: ${time} ms`)
}))

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
