const mongoose = require("mongoose")
const { Schema, model } = mongoose

const userSchema = new Schema({
    userType: {
        type: String,
        enum: ["Mentor", "Mentee"]
    },	
    email: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    },
    username: {
        type: String, required: true, unique: true
    },
    aboutMe: {
        type:String, default: ""
    },
    profileImg: {
        type: String, default:"http://cdn.onlinewebfonts.com/svg/img_574534.png"
    },
    token: {
        type: Number, default: 100
    },
    chats: [{
        type: Schema.Types.ObjectId, ref:"chat"
    }],
    ocuppation:	{
        type:String
    },		
    company: {
        type:String
    },
    skills: [{
        type: Schema.Types.ObjectId, ref:"skills"
    }],
    course: {
        type: String,
        enum: ['Web Development', 'UX/UI', 'Data Analytics']
    },
    graduationYear:	{
        type:Number
    },
     Comments: [{type: Schema.Types.ObjectId, ref:"comments"}],
     questions:	[{type: Schema.Types.ObjectId, ref:"question"}]
})

module.exports = model("User", userSchema)

