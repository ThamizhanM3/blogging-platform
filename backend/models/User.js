const mongoose = require('mongoose') //Importing mongoose

const userDetailSchema = new mongoose.Schema({ //Creating userDetailSchema
    firstName: {
        type: String //Getting First Name in String Type
    },
    lastName: {
        type: String //Getting Last Name in String Type
    },
    userId: {
        type: String //Getting User ID in String Type
    },
    emailId: {
        type: String //Getting Email ID in String Type
    },
    phoneNumber:{
        type:Number //Getting Phone number Number in String Type
    },
    profilePicture: {
        type: String //Getting Profile Picture as an Image
    },
    password: {
        type: String //Getting Pssword in String Type
    }
}, {
    versionKey: false //Disable versionKey
})

const User = mongoose.model('UserDetails', userDetailSchema) //Create model(User) with userDetailSchema

module.exports = User //Export User model