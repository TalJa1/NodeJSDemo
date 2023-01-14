const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

//use morgan
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
  // res.json('Hello World!')
})

//use router
const router = require('./routes/router1')

app.use('/api/v1/', router)

//127.0.0.1 => localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})