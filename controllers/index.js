const express = require('express');
const router = express.Router();

router.get("/whoami", (req, res) => {

    res.json({
        "ipaddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        "language": req.headers["accept-language"].split(",")[0],
        "software": req.headers["user-agent"].match(/\((.*?)\)/)[1]
    });
});

module.exports = router;