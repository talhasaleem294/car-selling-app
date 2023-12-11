const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ title: 'Express', Message: `I'm listening on ${ process.env.PORT }` });
});

module.exports = router;
