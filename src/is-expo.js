/**
 * Detecting if running on Expo: https://github.com/expo/fyi/blob/master/expo-extension-migration.md#after-1
 */

// eslint-disable-next-line import/no-mutable-exports
let isExpo = false;

try {
  // eslint-disable-next-line global-require
  const Constants = require('expo-constants');
  const executionEnvironment = Constants.ExecutionEnvironment;

  isExpo = executionEnvironment.Standalone === 'standalone'
    || executionEnvironment.StoreClient === 'storeClient';
  // eslint-disable-next-line no-empty
} catch { }

export default isExpo;
