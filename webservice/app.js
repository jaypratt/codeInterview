//Initial set up code for the website
const express = require('express')
const app = express()
const port = 3000
//This code is what we send back to the User
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//The following code keeps track of logs
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})