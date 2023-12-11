const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VehicleSchema = new Schema({
  
  model: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  phno: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: false
  }
});

module.exports = Vehicle = mongoose.model('vehicles', VehicleSchema);
