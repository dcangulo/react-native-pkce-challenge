const { getRandomBytes } = require('expo-random');
const { Buffer } = require('buffer');

function generateRandomBytes() {
  const u8 = getRandomBytes(96);
  const buffer = Buffer.from(u8);
  const bytes = buffer.toString('base64');

  return bytes;
}

module.exports = generateRandomBytes;
