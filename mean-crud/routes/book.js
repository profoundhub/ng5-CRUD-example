let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Express RESTful API');
});

module.exports = router;