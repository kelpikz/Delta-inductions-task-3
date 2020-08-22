const aNum = (req, res, next) => {
  console.log(isNaN(req.params.rollno));
  if (!isNaN(req.params.rollno)) {
    console.log("num");
    next();
  } else {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  }
};

module.exports = aNum;
