const mongoose = require('mongoose');

const parkingSlotSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  color: { type: String, required: true },
});

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);

module.exports = ParkingSlot;
