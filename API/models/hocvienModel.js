const mongoose = require('mongoose');
let hocvienSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    classname: String
});
module.exports = mongoose.model("HocVien",hocvienSchema);