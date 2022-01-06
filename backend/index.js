//importing packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//importing router
const todo = require("./routes/todo");
const signup = require("./routes/signup");
const signin = require("./routes/signin");
//importing custom files

//initializing app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//defining routes
app.use("/api/todos", todo);
app.use("/api/signup", signup);
app.use("/api/signin", signin);

//define varables
const port = process.env.PORT || 5000;
const connectionString = process.env.CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("Welcome to our TODO API");
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

//connecting to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((error) => console.log(`Oh No error occured : ${error.message}`));
