const { NativeModules } = require('react-native');
const { isExpo, getRandomBytesAsync, Buffer } = require('./expo-modules');

function generateRandomBytes() {
  return new Promise((resolve) => {
    if (isExpo) {
      getRandomBytesAsync(96).then((u8) => {
        const buffer = Buffer.from(u8);
        const bytes = buffer.toString('base64');

        resolve(bytes);
      });
    } else {
      NativeModules?.RandomBytes?.randomBytes(resolve);
    }
  });
}

module.exports = generateRandomBytes;
