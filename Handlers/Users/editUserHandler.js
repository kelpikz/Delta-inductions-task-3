const Students = require("../../Models/Student");
const bcrypt = require("bcrypt");

module.exports.editUserHandler = async (req, res, next) => {
  try {
    let student = await Students.findOne({ rollno: req.params.rollno });
    if (student)
      res.render("editUser", { student, wrongPassword: req.wrongPassword });
    else next();
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    let student = await Students.findOne({ rollno: req.params.rollno });
    let isMatch = await bcrypt.compare(req.body.password, student.password);
    if (isMatch) {
      req.body.password = student.password;
      student = await Students.findOneAndUpdate(
        { rollno: req.params.rollno },
        req.body
      );
      res.redirect(`${student.rollno}`);
    } else res.redirect(`${student.rollno}/edit/wrong`);
  } catch (err) {
    next(err);
  }
};
