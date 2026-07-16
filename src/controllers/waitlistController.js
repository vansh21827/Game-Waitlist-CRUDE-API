const waitlist = require("../data/waitlist");
const Waitlist = require("../models/waitlistModel");
const sanitizeInput = require("../middleware/sanitize");
const logAnalytics = require("../utils/analytics");

// GET /api/waitlist
const getAllPlayers = (req, res) => {
  if (waitlist.length === 0) {
    return res.status(200).json({
      success: true,
      message: "No data found",
      data: [],
    });
  }

  return res.status(200).json({
    success: true,
    message: "Waitlist retrieved successfully",
    data: waitlist,
  });
};

// GET /api/waitlist/:id
const getPlayerById = (req, res) => {
  const { id } = req.params;

  const player = waitlist.find((item) => item.id === id);

  if (!player) {
    return res.status(404).json({
      success: false,
      message: "Player not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: player,
  });
};

// POST /api/waitlist
const createPlayer = (req, res) => {
  let { playerName, game, partySize } = req.body;

  playerName = sanitizeInput(playerName);
  game = sanitizeInput(game);

  const newPlayer = new Waitlist(playerName, game, partySize);

  waitlist.push(newPlayer);

  logAnalytics("CREATE");

  return res.status(201).json({
    success: true,
    message: "Player added successfully",
    data: newPlayer,
  });
};

// PUT /api/waitlist/:id
const updatePlayer = (req, res) => {
  const { id } = req.params;

  const player = waitlist.find((item) => item.id === id);

  if (!player) {
    return res.status(404).json({
      success: false,
      message: "Player not found",
    });
  }

  const { playerName, game, partySize, status } = req.body;

  if (playerName) player.playerName = sanitizeInput(playerName);
  if (game) player.game = sanitizeInput(game);
  if (partySize) player.partySize = Number(partySize);
  if (status) player.status = sanitizeInput(status);

  logAnalytics("UPDATE");

  return res.status(200).json({
    success: true,
    message: "Player updated successfully",
    data: player,
  });
};

// DELETE /api/waitlist/:id
const deletePlayer = (req, res) => {
  const { id } = req.params;

  const index = waitlist.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Player not found",
    });
  }

  const deleted = waitlist.splice(index, 1);

  logAnalytics("DELETE");

  return res.status(200).json({
    success: true,
    message: "Player deleted successfully",
    data: deleted[0],
  });
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
};