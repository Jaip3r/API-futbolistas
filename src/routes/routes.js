const express = require('express');
const {getPlayers, getOnePlayer, createPlayer, updatePlayer, deletePlayer} = require('../controller/FutbolController');

const router = express.Router();

/* Endpoints */ 

router.get('/players', getPlayers)

router.get('/players/:id', getOnePlayer)

router.post('/players', createPlayer)

router.patch('/players/:id', updatePlayer)

router.delete('/players/:id', deletePlayer)

module.exports = router;