class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
    // Error.captureStackTrace(this); //attach the stack propery on our error object'
    // console.log("Printing stack trace");
    // console.log(this.stack);
  }
}
module.exports = BaseError;
