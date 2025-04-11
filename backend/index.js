const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ')
})
app.get('/users', (req, res) => {
  res.send('users ')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})