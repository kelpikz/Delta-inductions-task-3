const Students = require("../../Models/Student");
const bcrypt = require("bcrypt");

const deleteUserHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    let student = await Students.findOne({ rollno: req.params.rollno });
    let isMatch = await bcrypt.compare(req.body.password, student.password);
    if (isMatch) {
      await Students.findOneAndDelete({ rollno: req.params.rollno });
      res.redirect("/user");
    } else res.redirect(`/user/${req.params.rollno}/wrong`);
  } catch (err) {
    return next(err);
  }
};
module.exports = deleteUserHandler;
