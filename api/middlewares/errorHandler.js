const errorHandler = (err, req, res, next) => {
  // Set default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Return a structured error response
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export default errorHandler;
