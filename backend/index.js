// app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static('uploads')); // serve uploaded files

// Routes
const firRoutes = require('./routes/firRoutes');
app.use('/api/fir', firRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
app.get('/', (req, res) => {
  res.send('Hello ')
})
app.get('/users', (req, res) => {
  res.send('users ')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
