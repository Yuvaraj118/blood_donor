const mongoose = require('mongoose');

const donorSchema = {
    donorId: { type: Number, required: true },
    name: { type: String, required: true },
    bloodType: { type: String, required: true },
    age: { type: Number, required: true },
    contactNumber: { type: String, required: true },
    
};

module.exports = mongoose.model("Donor", donorSchema);

