const express = require('express') // step 1
const cors = require('cors') //3
const app = express() // step 2 ...

app.use(cors()) //4

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  })
})

app.listen(8080, () =>
  console.log('API is running on http://localhost:8080/login'),
)
