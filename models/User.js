const mongoose = require("mongoose")
const {Types} = mongoose

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
    userName: {
        type: String
    },
    main: [{type: Types.ObjectId, ref: "Main"}]
})

module.exports = mongoose.model("User", userSchema)
