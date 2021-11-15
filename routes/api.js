const express = require('express');
const router = express.Router();

const { connect } = require("../USBReader");

router.get("/get", async (req, res, next) => {
    await connect();
    res.json({
        "body": "hi",
        "test": "successful!"
    })
});

module.exports = router;
