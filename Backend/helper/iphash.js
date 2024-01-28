const crypto = require('crypto');

function hashString(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

module.exports = {
  hashString,
};
