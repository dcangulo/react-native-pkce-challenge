// @ts-ignore
import { NativeModules, Platform } from 'react-native';
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

  const bytes = Platform.select({
    ios: () => (global as any).randomBytes(),
    android: () => (global as any).randomBytes(),
    default: () => {
      const buffer = CryptoJS.lib.WordArray.random(96);
      const bytes = buffer.toString(CryptoJS.enc.Base64);

      return bytes;
    },
  })();

  return bytes;
}
