const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ message: "Validation Failed", stack: err.stack });
      break;
    case constants.NOT_FOUND:
      res.json({ message: "Resource not found", stack: err.stack });
      break;
    case constants.UNAUTHORIZED:
      res.json({ message: "Unauthorized access", stack: err.stack });
      break;
    case constants.FORBIDDEN:
      res.json({ message: "Forbidden access", stack: err.stack });
      break;
    case constants.SERVER_ERROR:
      res.json({ message: "Internal Server Error", stack: err.stack });
      break;
    default:
      console.log("No error, all good!");
      break;
  }
};
module.exports = errorHandler;
