const app = require("../app.js");

exports.errorHandler = (err, req, res, next) => {
  if (/validation failed/.test(err._message)) {
    err.statusCode = 400;
    err.message =
      "Validation of fields failed, incorrect values or format of request body";
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).send({
    status: err.statusCode,
    message: err.message,
  });
};
