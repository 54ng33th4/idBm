const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/applns');

const Schema = mongoose.Schema;

var NewApplnsSchema = new Schema({
    _id : Number,
    name : String,
    email : String,
    phone : Number,
    course : String,
    batch : String,
    imageUrl : String
});

var Applndata = mongoose.model('appln', NewApplnsSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Applndata;