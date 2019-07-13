var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{id: 1, name: 'Zvjezdana Birthe, party of 2 @8pm'},
    { id: 2, name: 'Zydrunas Ilgauskas, party of 3 @3pm' }]);

});

module.exports = router;
