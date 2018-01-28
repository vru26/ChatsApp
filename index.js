var express = require('express');
var router = express.Router();
var app = express();

//var db = require('../queries');


router.get('/microservices/api/src/server.js');
app.get('/', function(req, res) {
    res.send(__dirname + '/server.js');
});
router.post('/api/puppies');
router.put('/api/puppies/:id');
router.delete('/api/puppies/:id');
app.listen(8080, function() {
    console.log("Listening on 8080!");
});

module.exports = router;