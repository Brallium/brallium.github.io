const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Feedback = require('./feedbackSchema');
const cors = require('cors');

const mongoose = require("mongoose");
app.use(cors({
  origin: "http://localhost:3001" 
}));
app.use(express.json());
mongoose.connect("mongodb+srv://janiekuang8679:brallium123@bralliummerndb.7roy3tv.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Connection error:", error);
    res.status(500).send('Error occurred while saving feedback');
  });

const User = require('./userSchema');

//route for feedback form
app.post('/feedback', async(req, res) => {
  const product_level = req.body.product_satisfication_level;
  console.log("received");
  const service_level = req.body.service_satisfication_level;
  const feedback = req.body.feedback;

  const formData = new Feedback ({
    product_satisfication_level: product_level,
    service_satisfication_level: service_level,
    feedback: feedback
  })

  try {
    await formData.save();
    res.send("Submitted feedback");
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred while saving feedback');
  }
});

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

