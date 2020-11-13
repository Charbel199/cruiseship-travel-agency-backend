class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  var { statusCode, message } = err;
  var status = "fail";
  //If the error does not come from an error handler --> It's an internal server error
  if (!statusCode) {
    statusCode = 500;
    message = "Internal Server Error";
    status = "error";
    console.log("Inside error.js");
    console.log("Error: ", err);
  }

  res.status(statusCode).json({
    status,
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
