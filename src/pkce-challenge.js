const CryptoJS = require('crypto-js')
const randomBytes = require('./random-bytes')

function base64UrlEncode(str) {
  return str
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function generateVerifier() {
  return new Promise(function(resolve, reject) {
    randomBytes().then(function(bytes) {
      resolve(base64UrlEncode(bytes))
    })
  })
}

function generateChallenge(verifier) {
  const hash = CryptoJS.SHA256(verifier).toString(CryptoJS.enc.Base64)

  return base64UrlEncode(hash)
}

function pkceChallenge() {
  return new Promise(function(resolve, reject) {
    generateVerifier().then(function(verifier) {
      const challenge = generateChallenge(verifier)

      resolve({
        codeChallenge: challenge,
        codeVerifier: verifier
      })
    })
  })
}

module.exports = pkceChallenge
