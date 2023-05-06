// @ts-ignore
import { NativeModules } from 'react-native';
import CryptoJS from 'crypto-js';
import { BYTE_LENGTH } from './utils';

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

  if (globalObject?.RNPkceChallenge) {
    const bytes = globalObject.RNPkceChallenge.randomBytes(BYTE_LENGTH);

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(BYTE_LENGTH);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}
