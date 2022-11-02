const { makeTopMoversCall } = require('./topMovers.service.js');
const utils = require('../utils/index.js');

const marketMoversgetService = async req => {
  const niftyStocks = await utils.makeAPICall(
    `https://run.mocky.io/v3/14d3b980-b3c0-414c-86e0-39ef7c458706`,
    'GET',
    {},
  );
  const topMovers = makeTopMoversCall({ niftyStocks }, req);
  return topMovers;
};
module.exports = { marketMoversgetService };
