// @ts-ignore
import { NativeModules } from 'react-native';
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
    } else if ((global as any).randomBytes) {
      const bytes = (global as any).randomBytes();

      resolve(bytes);
    } else {
      const buffer = CryptoJS.lib.WordArray.random(96);
      const bytes = buffer.toString(CryptoJS.enc.Base64);

      resolve(bytes);
    }
  });
}
