const express = require('express');
const connectDB = require('./db/mongoose');
const employeeRouter = require('./routes/api/employee');

const app = express();

app.use(express.json({ extended: false }));

connectDB();

app.use('/api/employee', employeeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port: ', PORT));
