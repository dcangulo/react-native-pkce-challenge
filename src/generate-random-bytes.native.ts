import { NativeModules } from 'react-native';
import { getRandomBase64StringFallback, BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  const globalObject: any = global;

  if (globalObject?.ExpoModules?.ExpoRandom) {
    return globalObject.ExpoModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);
  }

  if (globalObject?.ExpoModules?.ExpoCrypto) {
    return globalObject.ExpoModules.ExpoCrypto.getRandomBase64String(BYTE_LENGTH);
  }

  if (NativeModules.ExpoRandom) {
    return NativeModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);
  }

  if (NativeModules.ExpoCrypto) {
    return NativeModules.ExpoCrypto.getRandomBase64String(BYTE_LENGTH);
  }

  if (globalObject?.PkceChallenge) {
    return globalObject.PkceChallenge.getRandomBase64String(BYTE_LENGTH);
  }

  return getRandomBase64StringFallback(BYTE_LENGTH);
}
