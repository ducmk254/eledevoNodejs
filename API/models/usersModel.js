const mongoClient = require('mongoose');

let userSchema = mongoClient.Schema({
    firstName: String,
    lastName : String,
    age      : Number
})

module.exports = mongoClient.model("User",userSchema);