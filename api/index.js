const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const UserModel = require('./models/user')
const routes = require('./routes/index')


const app = express()

// Data processing
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Cors
app.use(cors())
app.options('*', cors())

// Connect to the database
const dbName = "test-db"
const user = "sami.ullah.cowlar"
const password = "cowlar123"
const sequelizeOptions = { 
    host: "localhost",
    dialect: "mysql",
    port: 3306
}

const sequelize = new Sequelize(dbName, user, password, sequelizeOptions) 
const User = UserModel(sequelize)
sequelize
.sync()
.then(() => console.log("Db Connected"))

// Routes
app.use('/v1', routes)

// initiate Server
app.listen(4000, () => console.log("Server Running \n http://localhost:4000"))
