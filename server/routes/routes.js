const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/getMovies', controllers.getMovies);
router.post('/createMovie', controllers.createMovie);
router.put('/getMovie/:id', controllers.getMovie);

router.put('/updateUser/:id', controllers.updateUser)
router.put('/getUser/:id', controllers.getUser)

module.exports = router