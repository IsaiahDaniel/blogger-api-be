const errorHandler = (err, req, res, next) => {
  // log to console for dev
  console.log(err);

  const error = { ...err };

  error.message = err.message;

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default errorHandler;
