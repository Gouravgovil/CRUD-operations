const mongoose = require('mongoose'); // Import mongoose

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Age: Number
});

const Usermodel = mongoose.model("users", UserSchema) // collection name is users and model name is Usermodel and schema is UserSchema
module.exports = Usermodel; // exporting the model so that it can be used in other files