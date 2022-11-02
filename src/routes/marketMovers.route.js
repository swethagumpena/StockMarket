const express = require('express');
const marketMoversHandler = require('../handlers/marketMovers.handler.js');

const marketMoversRouter = express.Router();

marketMoversRouter.get('/', marketMoversHandler.marketMoversgetHandler);

module.exports = {
  marketMoversRouter,
};
