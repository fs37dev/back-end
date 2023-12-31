const { validationResult, check, query } = require("express-validator");
const { throwError } = require("../utils/throw-error");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throwError(errors.array()[0].msg, 404, next);
  }
  next();
};

exports.validationRegister = [
  check("name", "name is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "email must be in email format").isEmail(),
  check("password", "password is required").notEmpty(),
];

exports.validationLogin = [
  check("email", "email is required").notEmpty(),
  check("email", "email must be in email format").isEmail(),
  check("password", "password is required").notEmpty(),
];

exports.validationCreateReservation = [
  check("doctorId", "doctorId is required").notEmpty(),
  check("date", "date is required").notEmpty(),
  check("time", "time is required").notEmpty(),
  check("packageId", "packageId is required").notEmpty(),
];

exports.validationUpdateReservation = [
  check("status", "status is required").notEmpty(),
  check("status", "status value only has the option  'Pending' / 'Approved' / 'Rejected'").isIn(["Pending", "Approved", "Rejected"]),
];

exports.validationUpdateUser = [
  check("name", "name is required").notEmpty(),
  check("phoneNumber", "phoneNumber is required").notEmpty(),
  check("sex", "sex is required").notEmpty(),
  check("sex", "sex value only has the option 'Laki-laki' / 'Perempuan'").isIn(["Laki-laki", "Perempuan"]).notEmpty(),
];

exports.validationUpdateUserDashboard = [
  check("name", "name is required").notEmpty(),
  check("hospital", "hospital is required").notEmpty(),
  check("biography", "biography is required").notEmpty(),
];

exports.validationCreateArticle = [
  check("title", "title is required").notEmpty(),
  check("description", "description is required").notEmpty(),
  check("category", "category is required").notEmpty(),
];

exports.validationUpdateArticle = [
  check("title", "title is required").notEmpty(),
  check("description", "description is required").notEmpty(),
  check("category", "category is required").notEmpty(),
];
