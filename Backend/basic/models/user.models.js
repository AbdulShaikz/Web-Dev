const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/users");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    profilePicUrl:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("users",userSchema);