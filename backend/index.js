const express = require('express');
const app = express();
const port = 5000
require('dotenv').config();
const connectToMongo = require('./db');
app.use(express.json())

connectToMongo();
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/case', require('./routes/casesRoutes'))
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})