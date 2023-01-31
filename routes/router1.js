const express = require('express')
const router = express.Router()


//router
router.get('/', (req, res) => {
  res.json({
    "Name": "T",
    "Age":"10"
  })
})

router.get('/product', (req, res) => {
  res.json({
    "ID":"1",
    "ProductName": "A"
  })
})

router.get('/product/:id', (req, res) => {
  if ( 0 < req.params.id < 5) {
    res.json({
      "ID":`${req.params.id}`,
      "ProductName": "A"
    })
  } else if (req.params.id > 5){
    res.json({
      "Mess":"Hello"
    })
  }
})

module.exports = router