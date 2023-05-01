// @ts-ignore
import { NativeModules } from 'react-native';
import CryptoJS from 'crypto-js';
import { BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  if (NativeModules.ExpoCrypto) {
    const bytes = NativeModules.ExpoCrypto.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }
  
  if (NativeModules.ExpoRandom) {
    const bytes = NativeModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if ((global as any)?.ExpoModules?.ExpoRandom) {
    const bytes = (global as any).ExpoModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if ((global as any)?.RNPkceChallenge) {
    const bytes = (global as any).RNPkceChallenge.randomBytes(BYTE_LENGTH);

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(BYTE_LENGTH);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}
