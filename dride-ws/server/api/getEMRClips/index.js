'use strict';

var express = require('express');
var controller = require('./getEMRClips.controller');

var router = express.Router();

router.get('/', function(req, res) {
	controller.index(req, res);
});

module.exports = router;
