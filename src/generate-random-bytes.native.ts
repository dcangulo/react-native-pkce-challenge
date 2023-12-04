import { NativeModules } from 'react-native';
import { fallbackRandomBase64String, BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  const globalObject: any = global;

  if (globalObject?.ExpoModules?.ExpoRandom) {
    const bytes = globalObject.ExpoModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if (globalObject?.ExpoModules?.ExpoCrypto) {
    const bytes = globalObject.ExpoModules.ExpoCrypto.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if (NativeModules.ExpoRandom) {
    const bytes = NativeModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if (NativeModules.ExpoCrypto) {
    const bytes = NativeModules.ExpoCrypto.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if (globalObject?.PkceChallenge) {
    const bytes = globalObject.PkceChallenge.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  const bytes = fallbackRandomBase64String(BYTE_LENGTH);

  return bytes;
}
