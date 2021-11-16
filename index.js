const express = require("express");
const sqlite = require("sqlite");
const app = express();
const port = 3000;

const api = require("./routes/api");
const {connect} = require("./USBReader");

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*");
    next()
})

app.use("/api", api);

app.listen(3000, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
})
