const {base64UrlEncode, generateChallenge} = require('./common')
const generateRandomBytes = require('./async-random-bytes')

function generateVerifier() {
  return new Promise(function(resolve, reject) {
    generateRandomBytes().then(function(bytes) {
      resolve(base64UrlEncode(bytes))
    })
  })
}

function asyncPkceChallenge() {
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

module.exports = asyncPkceChallenge
