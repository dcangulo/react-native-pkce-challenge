// @ts-ignore
import { NativeModules, Platform } from 'react-native';
import CryptoJS from 'crypto-js';

export default function generateRandomBytes() {
  return new Promise<string>((resolve) => {
    if (NativeModules.ExpoRandom) {
      NativeModules.ExpoRandom
        .getRandomBase64StringAsync(96)
        .then((bytes: string) => {
          resolve(bytes);
        });
    } else if ((global as any).ExpoModules) {
      const bytes = (global as any).ExpoModules
        .ExpoRandom
        .getRandomBase64String(96);

      resolve(bytes);
    } else {
      Platform.select({
        ios: async () => (global as any).randomBytes(),
        android: async () => (global as any).randomBytes(),
        macos: async () => {
          const bytes = await NativeModules.RandomBytes.randomBytes();

          return bytes;
        },
        default: async () => {
          const buffer = CryptoJS.lib.WordArray.random(96);
          const bytes = buffer.toString(CryptoJS.enc.Base64);

          return bytes;
        },
      })().then((bytes: string) => {
        resolve(bytes);
      });
    }
  });
}
