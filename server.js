require('dotenv').config();
const express = require('express');
const cors = require('cors');
const petsRouter = require('./routes/petsRouter');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/pets',petsRouter)


app.listen(2222, () => {
  console.log("Server is running on port 2222");
});
