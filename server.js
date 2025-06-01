require('dotenv').config();
const express = require('express');
const cors = require('cors');
const petsRouter = require('./routes/petsRouter');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 
app.use('/pets', petsRouter);

// ⚠️ PORT dinamik bo‘lishi kerak
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
