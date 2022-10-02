const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

connectToMongo();

// For parsing application/json
app.use(express.json());

//for calling direct from browser
app.use(cors())

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/plan" , require("./routes/plan"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
