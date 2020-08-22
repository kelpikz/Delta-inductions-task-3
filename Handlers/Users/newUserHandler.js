const Students = require("../../Models/Student");

module.exports.newUserHandler = (req, res, next) => {
  res.render("newUser");
};

module.exports.createUserHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    let student = await Students.create(req.body);
    res.redirect(`user/${student.rollno}`);
  } catch (err) {
    //  If username/ email already taken, tell user
    if (err.code === 11000) {
      // This is validation error code in mongoose
      err.message = "A user with this roll number already exists";
      //  Tell user bad request(400)
      return next({ status: 400, message: err.message });
    }
    console.log(err);
    console.log(err.ccde);
    //  Otherwise send a gerneric error
    return next({ status: 500 });
  }
};
