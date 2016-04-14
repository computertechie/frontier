var express = require('express');
var router = express.Router();
var database = require('frontier-database')();

/* GET home page. */
router.get('/', function (req, res, next) {
});

router.get('/room', function (req, res, next) {
    res.render('new_room_form');
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

router.get('/data', function(req, res){
    database.getSensors({}, "_id name", null).then(function(sensors){
        res.render('manual_data_form', {
            sensors: sensors
        });
    });
});

module.exports = router;

