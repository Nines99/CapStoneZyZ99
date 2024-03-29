const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content - type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let roleRoutes = require('./routes/roleRoutes')
app.use('/api/roles', roleRoutes)

let teamRoutes = require('./routes/teamRequestRoutes')
app.use('/api/teams', teamRoutes)

let requestRoutes = require('./routes/soloRequestRoutes')
app.use('/api/requests', requestRoutes)

let soloApplicationRoutes = require('./routes/soloApplicationRoutes')
app.use('/api/soloApplications', soloApplicationRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
