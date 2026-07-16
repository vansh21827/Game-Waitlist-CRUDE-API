const express = require("express");

const router = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/waitlistController");

const {
  waitlistValidation,
  handleValidationErrors,
} = require("../middleware/validate");

router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);

router.post(
  "/",
  waitlistValidation,
  handleValidationErrors,
  createPlayer
);

router.put(
  "/:id",
  waitlistValidation,
  handleValidationErrors,
  updatePlayer
);

router.delete("/:id", deletePlayer);

module.exports = router;