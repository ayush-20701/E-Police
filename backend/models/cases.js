const mongoose = require('mongoose');
const { Schema } = mongoose;
const casesSchema = new Schema ({
    user: {  //Add this field to associate notes with a user
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
    },
    username:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['zero fir', 'general fir', 'counter fir', 'second fir'],
    },
    description: String,
    location: String,
    evidenceFiles: [String],
    isAnonymous: { 
        type: Boolean, default: true 
    },
    status: { 
        type: String, default: "Filed" 
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Phone number must be 10 digits']
    },
    aadhaarNumber: {
        type: String,
        required: true,
        match: [/^\d{12}$/, 'Aadhaar number must be 12 digits']
    },
    submittedAt: { 
        type: Date, default: Date.now 
    },
})
const Cases = mongoose.model('cases', casesSchema)
module.exports = Cases