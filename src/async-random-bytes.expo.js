const { getRandomBytesAsync } = require('expo-random');
const { Buffer } = require('buffer');

function generateRandomBytes() {
  return new Promise((resolve) => {
    getRandomBytesAsync(96).then((u8) => {
      const buffer = Buffer.from(u8);
      const bytes = buffer.toString('base64');

      resolve(bytes);
    });
  });
}

module.exports = generateRandomBytes;
