var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('manual_data_form', {id: 1});
});


router.get('/room', function (req, res, next) {
    res.render('new_room_form', {id: 1});
});

router.post('/room', function (req, res, next) {
    res.send("Hi");
});
router.get('/sensor', function (req, res, next) {
    res.render('new_sensor_form', {
        rooms: [
            {
                id:1,
                name:"First"
            },
            {
                id:2,
                name:"Second"
            }
        ]
    });
});

module.exports = router;

