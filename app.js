const express = require("express");
const app = express();
const cors = require("cors");
//middlewares
app.use(express.json());
app.use(cors());

app.use('/images', express.static('./images'));

// routers
const product = require("./Routes/products.route");
const question = require("./Routes/question.route");
const userRoute = require("./Routes/user.route");

app.get("/", (req, res) => {
    res.send("Server is working! YaY!");
});


app.use("/api/v1/", product);
app.use("/api/v1/", question);
app.use("/api/v1/", userRoute);

module.exports = app;