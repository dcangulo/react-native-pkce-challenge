import { NativeModules } from 'react-native';
import { getRandomBase64StringFallback, BYTE_LENGTH } from './utils';
import PkceChallenge from './NativePkceChallenge';

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

  if (PkceChallenge?.getRandomBase64String) {
    return PkceChallenge.getRandomBase64String(BYTE_LENGTH);
  }

  return getRandomBase64StringFallback(BYTE_LENGTH);
}
