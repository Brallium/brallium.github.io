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
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });