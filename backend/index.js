const bodyParser = require('body-parser'); //Import Body Parser
const cors = require('cors'); //Import Cors
const express = require('express') //Import Express
const mongoose = require('mongoose'); //Import Mongoose

const userRoutes = require('./routes/userRoutes')

const app = express() //Create an express  app 

app.use(bodyParser.json()) //Used to convert data to json format
app.use(cors()) //Used to make app be used by all domains

app.use('/user', userRoutes)

const Port = process.env.PORT || 5000 //Define a port that will run the application
const DataBase = 'BloggingPlatform'

console.log(`Loading Connection to ${DataBase} DataBase`); 

app.get('/', (require, response) => {
    console.log('Connected')
    response.status(200).json([
        {
            "connection": 1
        },
        {
            "connection": 2
        },
        {
            "connection": 3
        },
        {
            "connection": 4
        },
        {
            "connection": 5
        }
    ])
})

const connectToDB = async () => { //async function connect to DB
    try {
        await mongoose.connect(`mongodb+srv://Mithelesh:MitheleshM3@mithelesh01.yapjwgo.mongodb.net/${DataBase}?retryWrites=true&w=majority&appName=Mithelesh01`) //awaits for DB connection
        console.log(`Connected to ${DataBase} DataBase`);
        //Make to listen to port after DB connection
        app.listen(Port, () => { 
            console.log('Application Running on Port:', Port)
        })
    } catch (error) {
        console.log(error); 
        console.log(`${DataBase} DataBase connection not established`); 
    }
}

connectToDB()