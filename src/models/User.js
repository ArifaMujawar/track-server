const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
},
password: {
  required: true,
  type: String
}
});

mongoose.model('User', userSchema);