const CryptoJS = require('crypto-js');

function generateRandomBytes() {
  const buffer = CryptoJS.lib.WordArray.random(96);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}

module.exports = generateRandomBytes;
