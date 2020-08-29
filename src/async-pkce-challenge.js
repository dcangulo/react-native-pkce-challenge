const { base64UrlEncode, generateChallenge } = require('./common');
const generateRandomBytes = require('./async-random-bytes');

function generateVerifier() {
  return new Promise((resolve) => {
    generateRandomBytes().then((bytes) => {
      resolve(base64UrlEncode(bytes));
    });
  });
}

function asyncPkceChallenge() {
  return new Promise((resolve) => {
    generateVerifier().then((verifier) => {
      const challenge = generateChallenge(verifier);

      resolve({
        codeChallenge: challenge,
        codeVerifier: verifier
      });
    });
  });
}

module.exports = asyncPkceChallenge;
