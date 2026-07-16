const { body, validationResult } = require("express-validator");

const waitlistValidation = [
  body("playerName")
    .trim()
    .notEmpty()
    .withMessage("Player name is required")
    .isLength({ min: 2 })
    .withMessage("Player name must be at least 2 characters"),

  body("game")
    .trim()
    .notEmpty()
    .withMessage("Game is required"),

  body("partySize")
    .notEmpty()
    .withMessage("Party size is required")
    .isInt({ min: 1 })
    .withMessage("Party size must be greater than 0"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};

module.exports = {
  waitlistValidation,
  handleValidationErrors,
};