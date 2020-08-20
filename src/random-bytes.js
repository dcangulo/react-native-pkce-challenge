const randomBytes = require('crypto').randomBytes

function generateRandomBytes() {
  return new Promise(function(resolve, reject) {
    randomBytes(96, function(err, buffer) {
      const bytes = buffer.toString('base64')

      resolve(bytes)
    })
  })
}

module.exports = generateRandomBytes
