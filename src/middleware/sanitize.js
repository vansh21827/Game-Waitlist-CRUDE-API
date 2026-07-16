const sanitizeInput = (text) => {
  if (typeof text !== "string") return text;

  return text
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/"/g, "")
    .replace(/'/g, "")
    .trim();
};

const sanitizeMiddleware = (req, res, next) => {
  Object.keys(req.body).forEach((key) => {
    req.body[key] = sanitizeInput(req.body[key]);
  });

  next();
};

module.exports = sanitizeMiddleware;

const sanitizeInput = (text) => {
  if (typeof text !== "string") return text;

  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
};

module.exports = sanitizeInput;
