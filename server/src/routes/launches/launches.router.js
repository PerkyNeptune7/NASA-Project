const express = require('express');
const getAllLaunches = require('./launches.controller');
const launchesRouter = express.Router();
console.log('getAllLaunches:', getAllLaunches);
launchesRouter.get('/', getAllLaunches);

module.exports= launchesRouter;