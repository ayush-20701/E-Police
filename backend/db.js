const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URI
const connectToMongo = async () => {
    await mongoose.connect(mongoURL)
    console.log('Connected to Mongo successfully')
}
module.exports = connectToMongo