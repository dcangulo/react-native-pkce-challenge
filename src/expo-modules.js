/**
 * Detecting if running on Expo: https://github.com/expo/fyi/blob/master/expo-extension-migration.md
 */

// eslint-disable-next-line import/no-mutable-exports
let Buffer = null;
// eslint-disable-next-line import/no-mutable-exports
let getRandomBytes = null;
// eslint-disable-next-line import/no-mutable-exports
let getRandomBytesAsync = null;
// eslint-disable-next-line import/no-mutable-exports
let isExpo = false;

try {
  // eslint-disable-next-line global-require
  const executionEnvironment = require('expo-constants').ExecutionEnvironment;
  // eslint-disable-next-line global-require
  Buffer = require('buffer').Buffer;
  // eslint-disable-next-line global-require
  getRandomBytes = require('expo-random').getRandomBytes;
  // eslint-disable-next-line global-require
  getRandomBytesAsync = require('expo-random').getRandomBytesAsync;
  isExpo = executionEnvironment.Standalone === 'standalone'
    || executionEnvironment.StoreClient === 'storeClient';
  // eslint-disable-next-line no-empty
} catch { }

module.exports = {
  Buffer,
  getRandomBytes,
  getRandomBytesAsync,
  isExpo,
};
