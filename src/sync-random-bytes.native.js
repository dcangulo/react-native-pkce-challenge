const CryptoJS = require('crypto-js');
const { isExpo, getRandomBytes, Buffer } = require('./expo-modules');

function generateRandomBytes() {
  if (isExpo) {
    const u8 = getRandomBytes(96);
    const buffer = Buffer.from(u8);
    const bytes = buffer.toString('base64');

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(96);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}

module.exports = generateRandomBytes;
