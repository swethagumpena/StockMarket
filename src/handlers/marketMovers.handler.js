const services = require('../services/marketMovers.service.js');

const marketMoversgetHandler = async (req, res) => {
  try {
    const result = await services.marketMoversgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { marketMoversgetHandler };
