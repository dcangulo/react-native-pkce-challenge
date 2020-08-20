const randomBytes = require('react-native').NativeModules.RNRandomBytes.randomBytes

function generateRandomBytes() {
  return new Promise(function(resolve, reject) {
    randomBytes(96, function(err, bytes) {
      resolve(bytes)
    })
  })
}

module.exports = generateRandomBytes
