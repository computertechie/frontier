var express = require('express');
var router = express.Router();
var database = require('frontier-database')();

/* GET home page. */
router.get('/', function (req, res, next) {
});

router.get('/room', function (req, res, next) {
});

router.post('/room', function (req, res, next) {
});

router.get('/sensor', function (req, res, next) {
    database.getRooms({}, "_id name", null).then(function (rooms) {
        res.render('new_sensor_form', {
            rooms: rooms
        });
    })
});

module.exports = router;

