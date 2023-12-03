const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },

  lastName: {
    type: String,
    required: false,
  },

  firebaseId: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  //   password: {
  //     type: String,
  //     required: true,
  //   },

  address: {
    type: String,
    required: false,
  },
}); //can add more as needed

const User = mongoose.model("User", userSchema);

module.exports = User;
