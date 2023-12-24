require('dotenv').config()
import express from 'express'
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res)=>{
  res.send('Hello Twitter')
})

app.get('/login', (req,res)=>{
  res.send('<h1>Please Login at Chai Aur Code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
