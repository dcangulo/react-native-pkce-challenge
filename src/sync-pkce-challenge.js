const { base64UrlEncode, generateChallenge } = require('./common');
const generateRandomBytes = require('./sync-random-bytes');

function generateVerifier() {
  const bytes = generateRandomBytes();

  return base64UrlEncode(bytes);
}

function pkceChallenge() {
  const verifier = generateVerifier();
  const challenge = generateChallenge(verifier);

  return {
    codeChallenge: challenge,
    codeVerifier: verifier
  };
}

module.exports = pkceChallenge;
