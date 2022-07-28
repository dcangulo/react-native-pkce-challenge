// @ts-ignore
import { Platform } from 'react-native';
import CryptoJS from 'crypto-js';
import { isExpo, getRandomBytesAsync, Buffer } from '../utils/expo-modules';

export default function generateRandomBytes() {
  return new Promise<string>((resolve) => {
    if (isExpo) {
      // @ts-ignore
      getRandomBytesAsync(96).then((u8) => {
        // @ts-ignore
        const buffer = Buffer.from(u8);
        const bytes = buffer.toString('base64');

        resolve(bytes);
      });
    } else {
      const bytes = Platform.select({
        ios: () => (global as any).randomBytes(),
        android: () => (global as any).randomBytes(),
        default: () => {
          const buffer = CryptoJS.lib.WordArray.random(96);
          const bytes = buffer.toString(CryptoJS.enc.Base64);

          return bytes;
        },
      })();

      resolve(bytes);
    }
  });
}
