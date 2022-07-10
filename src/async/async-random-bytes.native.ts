// @ts-ignore
import { NativeModules } from 'react-native';
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
      NativeModules?.RandomBytes?.randomBytes(resolve);
    }
  });
}
