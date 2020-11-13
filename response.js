function createResponse(res, status, message, data) {
  return res.status(status).json({
    status,
    message,
    data,
  });
}

module.exports = {
  createResponse,
};
