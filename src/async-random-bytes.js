const { randomBytes } = require('crypto');

function generateRandomBytes() {
  return new Promise((resolve) => {
    randomBytes(96, (err, buffer) => {
      const bytes = buffer.toString('base64');

      resolve(bytes);
    });
  });
}

module.exports = generateRandomBytes;
