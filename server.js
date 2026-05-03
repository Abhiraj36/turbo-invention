const express = require('express')
require('dotenv').config();

//express app
const app = express()
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json());

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI).then(()=> {
//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port', process.env.PORT)
})
}).catch((error)=> {
    console.log(error)
})


