const express = require("express");
const app = express();
const port = 3000;

const api = require("./routes/api");
const {connect} = require("./USBReader");

app.use((req, res, next) => {
    // Permet d'autoriser l'accès à l'API lorsque le client est ouvert depuis un fichier (format file://)
    res.append("Access-Control-Allow-Origin", "*");
    next()
})

app.use("/api", api);

app.listen(3000, async () => {
    // Connecter le serveur au Arduino
    await connect();
    console.log(`Server is running on port ${port}`);
})
