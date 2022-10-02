const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')



connectToMongo();

// For parsing application/json
app.use(express.json());

//for calling direct from browser
app.use(cors())

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/plan" , require("./routes/plan"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});