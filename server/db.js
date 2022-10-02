const mongoose = require("mongoose");
const uri = `mongodb+srv://Satwik:Newton%408730@cluster0.zkoy6r7.mongodb.net/test`;

const connectToMongo = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("connection success to Mongo");
    }
  );
};
module.exports = connectToMongo;

