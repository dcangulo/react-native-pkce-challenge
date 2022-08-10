// @ts-ignore
import { NativeModules } from 'react-native';
import CryptoJS from 'crypto-js';
import { BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  if (NativeModules.ExpoRandom) {
    const bytes = NativeModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if ((global as any).ExpoModules) {
    const bytes = (global as any).ExpoModules.ExpoRandom.getRandomBase64String(BYTE_LENGTH);

    return bytes;
  }

  if ((global as any).RNPkceChallenge) {
    const bytes = (global as any).RNPkceChallenge.randomBytes();

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(BYTE_LENGTH);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}
