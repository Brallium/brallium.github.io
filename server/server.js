const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://janiekuang8679:brallium123@bralliummerndb.7roy3tv.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    process.exit(0);
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

const User = require('./userSchema');

async function newUser(data){
  const nUser = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password
  });
  try{
    savedUser = await nUser.save()
    console.log('User Upload Successful!')
    return savedUser;
  }
  catch{
    console.log('User Upload Failure')
    return null;
  }
}

module.exports = {
  newUser
}; //exports functions, everytime we have more functions we add in here

