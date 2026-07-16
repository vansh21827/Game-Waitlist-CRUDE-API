const logAnalytics = (action) => {
  console.log(
    `[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters | Action: ${action}`
  );
};

module.exports = logAnalytics;