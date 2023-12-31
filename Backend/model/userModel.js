const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required:true
  },
  
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    "secrete",
    { expiresIn: "7d" }
  );

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;