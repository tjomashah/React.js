const express = require('express') // step 1
const cors = require('cors') //3
const app = express() // step 2 ...

app.use(cors()) //4

app.use('/login', (req, res) => {
  res.send({
    token: 'unpaidTest',
  })
})

app.listen(4010, () =>
  console.log('API is running on http://localhost:4010/login'),
)
