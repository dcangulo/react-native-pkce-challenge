const CryptoJS = require('crypto-js');

function base64UrlEncode(str) {
  return str
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function generateChallenge(verifier) {
  const hash = CryptoJS.SHA256(verifier).toString(CryptoJS.enc.Base64);

  return base64UrlEncode(hash);
}

module.exports = {
  base64UrlEncode,
  generateChallenge
};
