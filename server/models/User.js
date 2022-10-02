const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subsciptionStart: {
      type: Date,
  },
  plan: {
    type: String,
  },
  interval: {
    type: String,
  }
});
const User = new mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;
