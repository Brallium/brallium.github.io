const express = require("express");
const verifyToken = require("./firebaseAdmin");
const app = express();
const cors = require("cors");
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());
const PORT = process.env.PORT || 3001;

// app.use("/", require("./routes/authRoutes"));

const UserModel = require("./userSchema");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://janiekuang8679:brallium123@bralliummerndb.7roy3tv.mongodb.net/myFirstDatabase",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

async function verifyRequest(req, res) {
  console.log("verify request");
  let auth = req.headers.authorization;
  if (!auth) {
    res.status(401);
    res.send("Unauthorized: no token");
    return false;
  }
  if (auth.length < 3) {
    res.status(401);
    res.send("Unauthorized: invalid token");
    return false;
  }
  const token = auth.split(" ")[1];
  const user = await verifyToken(token);
  console.log(user);

  if (!user) {
    res.status(401);
    res.send("Unauthorized: invalid user");
    return false;
  }

  // Create a new user if does not exist
  let existingUser = await UserModel.findOne({ firebaseId: user.uid });
  if (!existingUser) {
    const newUser = new UserModel({
      firebaseId: user.uid,
      email: user.email,
    });

    existingUser = await newUser.save();
  }

  return existingUser;
}

app.get("/getUser", async (req, res) => {
  const user = await verifyRequest(req, res);
  if (!user) {
    console.log("Invalid user");
    res.status(401);
    return;
  }

  res.send(user);
  res.status(200);

  // MongoDB find all PurchaseObjects with user.uid
  // return PurchaseObjects
});

// async function newUser(data) {
//   const nUser = new User({
//     firstName: data.firstName,
//     lastName: data.lastName,
//     email: data.email,
//     password: data.password,
//   });
//   try {
//     savedUser = await nUser.save();
//     console.log("User Upload Successful!");
//     return savedUser;
//   } catch {
//     console.log("User Upload Failure");
//     return null;
//   }
// }
