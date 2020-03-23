require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectDb } = require('./db')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/courses', async (req, res) => {
  const token = req.headers.authorization
  if (token) {
    const { Course } = await connectDb()
    const courses = await Course.find()
    return res.send(courses)
  }

  return res.status(403).send('You are not authorized')
})

app.post('/courses', async (req, res) => {
  const { courses } = req.body
  const { Course } = await connectDb()
  await Course.deleteMany()
  await Course.insertMany(courses)
  res.send(courses)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
