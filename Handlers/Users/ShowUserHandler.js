const Students = require("../../Models/Student");

const showUserHandler = async (req, res, next) => {
  try {
    console.log(req.params);
    let student = await Students.findOne({ rollno: req.params.rollno });
    if (!student) next();
    else res.render("showUser", { student, wrongPassword: req.wrongPassword });
  } catch (err) {
    next(err);
  }
};

module.exports = showUserHandler;
