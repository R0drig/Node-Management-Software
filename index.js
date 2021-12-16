const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./routes/users')
const app = express();
dotenv.config()
const port = process.env.PORT || 8000

app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.once('open',()=>{
    console.log('connected to database')
}).on('error',(err)=>{
    console.log("Err" + err)
})

app.use('/api', users)
app.listen(port, ()=>{
    console.log(`listening in ${port}`)
})