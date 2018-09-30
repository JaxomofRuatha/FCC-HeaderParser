const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/whoami');
});

router.get('/whoami', (req, res) => {
  const ipRaw =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  const ipaddress = ipRaw.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/);

  res.json({
    ipaddress: ipaddress[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
});

module.exports = router;
