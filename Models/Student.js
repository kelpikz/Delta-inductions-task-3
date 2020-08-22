const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  rollno: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  dept: { type: String, required: true },
  password: { type: String, required: true },
});

studentSchema.pre("save", async function (next) {
  try {
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Students", studentSchema);
