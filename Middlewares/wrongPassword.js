const wrongPassword = (req, res, next) => {
  req.wrongPassword = true;
  next();
};

module.exports = wrongPassword;
