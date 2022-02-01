const CryptoJS = require('crypto-js');
const { getRandomBytes } = require('expo-random');
const { Buffer } = require('buffer');
const isExpo = require('./is-expo');

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
