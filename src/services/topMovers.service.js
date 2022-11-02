const lodash = require('lodash');

const makeTopMoversCall = ({ niftyStocks }, req) => {
  const niftyData = niftyStocks;

  const sortByPercentChange = lodash.orderBy(niftyData, 'pChange', 'desc');
  const topTenGainers = lodash.take(sortByPercentChange, 10);
  const topTenLosers = lodash.takeRight(sortByPercentChange, 10);
  return {
    topTenGainers,
    topTenLosers,
  };
};

module.exports = { makeTopMoversCall };
