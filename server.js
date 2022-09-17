const express = require('express') 
const app = express() 
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'}) 

connectDB()

// middlewares 
app.set('view engine', 'ejs') //enables the app to use ejs in place of html as the default render method 
app.use(express.static('public')) //enable the appliacation to access static files in the public folder 
app.use(express.urlencoded({ extended: true })) //tells express to decode and encode URLs where header matches the content.
app.use(express.json()) //parses JSON content. replaces bodyParser

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port 2121`)
})