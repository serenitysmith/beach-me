const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    memberSince:{
        type: Date,
        default: Date.Now
    },
    email:{
        type: String
    },
    resident:{
        type:Boolean,
        required:true
    },
    emailUpdates:{
        type: Boolean
    }
})

module.exports = mongoose.model(`User`, userSchema)