const { randomBytes } = require('crypto');

function generateRandomBytes() {
  const buffer = randomBytes(96);
  const bytes = buffer.toString('base64');

  return bytes;
}

module.exports = generateRandomBytes;
