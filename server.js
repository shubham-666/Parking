
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const parkingLotRoutes = require('./parkingLotRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/parking', parkingLotRoutes);


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// class ParkingLot {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.slots = new Array(capacity).fill(null);
//     }

//     parkCar(registrationNumber, color) {
//         const emptySlotIndex = this.slots.findIndex(slot => slot === null);
//         if (emptySlotIndex === -1) {
//             return -1; // Parking lot is full
//         }

//         this.slots[emptySlotIndex] = { registrationNumber, color };
//         return emptySlotIndex + 1; // Slot numbers start from 1
//     }

//     leave(slotNumber) {
//         if (slotNumber < 1 || slotNumber > this.capacity) {
//             return; // Invalid slot number
//         }

//         this.slots[slotNumber - 1] = null;
//     }

//     getRegistrationNumbersForCarsWithColor(color) {
//         return this.slots
//             .filter(slot => slot !== null && slot.color === color)
//             .map(slot => slot.registrationNumber);
//     }

//     getSlotNumbersForCarsWithColor(color) {
//         return this.slots
//             .map((slot, index) => slot !== null && slot.color === color ? index + 1 : null)
//             .filter(slotNumber => slotNumber !== null);
//     }
// }

// // Example usage:
// const parkingLot = new ParkingLot(5);

// const slotNumber = parkingLot.parkCar("ABC123", "Blue");
// console.log("Allocated slot number:", slotNumber); // Output: 1

// parkingLot.leave(1);

// const registrationNumbers = parkingLot.getRegistrationNumbersForCarsWithColor("Blue");
// console.log("Registration numbers of blue cars:", registrationNumbers); // Output: []

// const slotNumbers = parkingLot.getSlotNumbersForCarsWithColor("Blue");
// console.log("Slot numbers of blue cars:", slotNumbers); // Output: []
