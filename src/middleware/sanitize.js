const sanitizeHtml = require("sanitize-html");

const sanitizeInput = (text) => {
  if (typeof text !== "string") return text;

  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
};

module.exports = sanitizeInput;