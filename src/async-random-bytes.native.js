// eslint-disable-next-line
const { NativeModules } = require('react-native');

function generateRandomBytes() {
  return new Promise((resolve) => {
    NativeModules?.RandomBytes?.randomBytes(resolve);
  });
}

module.exports = generateRandomBytes;
