const Students = require("../Models/Student");

const searchHandler = async (req, res, next) => {
  try {
    let x = await Students.find({}, "rollno name dept");
    res.json(x);
  } catch (err) {
    next(err);
  }
};

module.exports = searchHandler;
