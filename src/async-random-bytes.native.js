function generateRandomBytes() {
  // eslint-disable-next-line
  const { randomBytes } = require('react-native').NativeModules.RNRandomBytes;

  return new Promise((resolve) => {
    randomBytes(96, (err, bytes) => {
      resolve(bytes);
    });
  });
}

module.exports = generateRandomBytes;
