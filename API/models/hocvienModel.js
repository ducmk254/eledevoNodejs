const mongoose = require('mongoose');
let hocvienSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    classname: String
});
//hocvienSchema.createIndexes({'$**':'text'});
module.exports = mongoose.model("HocVien",hocvienSchema);