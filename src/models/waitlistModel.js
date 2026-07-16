class Waitlist {
  constructor(playerName, game, partySize) {
    this.id = Date.now().toString();

    this.playerName = playerName;

    this.game = game;

    this.partySize = Number(partySize);

    this.status = "waiting";

    this.createdAt = new Date().toISOString();
  }
}

module.exports = Waitlist;