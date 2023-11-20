const express = require("express");

const app = express();

const path = require("path");


const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");




app.use("/libs",express.static(path.join("node_modules")));
app.use("/static",express.static(path.join("public")));

app.use(adminRoutes);
app.use(userRoutes);


app.listen(3000, function() {
  console.log("Port 3000 ist aktiv");
})