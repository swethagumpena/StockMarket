const { marketMoversgetHandler } = require('../marketMovers.handler.js');
const services = require('../../services/marketMovers.service.js');

describe('marketMoversgetHandler', () => {
  it('should pass the test', () => {
    const spyOnMarketMoversgetService = jest.spyOn(
      services,
      'marketMoversgetService',
    );
    //TODO
  });
});
