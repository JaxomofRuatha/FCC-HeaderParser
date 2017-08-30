const express = require('express');
const router = express.Router();

//Homepage render path setup
router.get("/", (req, res) => {
    res.render("index");
});

//Logic for parsing url input
router.get("/:inputTime", (req, res) => {

});

module.exports = router;