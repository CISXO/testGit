const { getTestServiceData } = require("../service/testService");

exports.getTestService = async (req, res, next) => {
  try {
    const testInfo = await getTestServiceData();
    res.json({ message: testInfo, path: "/api/test" });
  } catch (err) {
    next(err);
  }
};