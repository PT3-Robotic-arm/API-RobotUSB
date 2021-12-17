const express = require('express');
const router = express.Router();

const { getLatestRow, getSince, getRow} = require("../db");
const { getLatestData } = require("../USBReader");

router.get("/getLatest", (req, res, next) => {
    const data = getLatestData();

    res.json(data)
});

router.get("/getSince/:since", (req, res, next) => {
    const data = getSince(req.params.since);

    res.json(data)
});

router.get("/getRow/:row", (req, res, next) => {
    const data = getRow(req.params.row);

    res.json(data)
});

module.exports = router;
