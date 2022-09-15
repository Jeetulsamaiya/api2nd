const mongoose = require('mongoose')
require('dotenv').config()

exports.dbconnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(function (connection){
        console.log('Database connected')
    })
    .catch(function (err){
        console.log(err)
    }
    )
}