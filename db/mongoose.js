const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/barbershop-v1', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    // EXIT PROCESS WITH FALIURE
    process.exit(1);
  }
};

module.exports = connectDB;
