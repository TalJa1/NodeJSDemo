const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

//use morgan
app.use(morgan('combined'))

//         vvv (You can add function midleware here to check login,...) 
app.get('/', (req, res, next) => {
  // Return HTML to screen
  // res.send('Hello World!')

  // Return json to screen
  // res.json('Hello World!')

  //Midleware checking condition (login,.....)
  //Midleware is a function
  //var Midleware = (req, res, next) => {}
  const a = 2
  if (a == 2) {
    next()
  }else{
    res.json({
      "data": "Ciera la pueta"
    })
  }
}, (req, res, next) => {
  res.json({
    "data": "Hola, me llamo T"
  })
}
)

// Import router to index
const router1 = require('./routes/router1')

//use router
//                vvv (Add midleware function here if y wanna check before access router)
app.use('/api/v1/', router1)

//127.0.0.1 => localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})