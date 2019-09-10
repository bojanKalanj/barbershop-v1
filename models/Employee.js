const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    unique: true
  }
});

module.exports = Employee = mongoose.model('employee', employeeSchema);
