// @ts-ignore
import { NativeModules } from 'react-native';
import CryptoJS from 'crypto-js';

export default function generateRandomBytes(): string {
  if (NativeModules.ExpoRandom) {
    const bytes = NativeModules.ExpoRandom.getRandomBase64String(96);

    return bytes;
  }

  if ((global as any).ExpoModules) {
    const bytes = (global as any).ExpoModules.ExpoRandom.getRandomBase64String(96);

    return bytes;
  }

  if ((global as any).randomBytes) {
    const bytes = (global as any).randomBytes();

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(96);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}
