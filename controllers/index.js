const express = require('express');
const router = express.Router();

//Homepage render path setup
router.get("/whoami", (req, res) => {
    const ip = "A"
    const lang = "B"
    const software = "C"
    res.json({ "ipaddress": ip, "language": lang, "software": software });
    console.log(req.headers);
});

module.exports = router;