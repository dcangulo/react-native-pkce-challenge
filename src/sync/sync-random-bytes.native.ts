import CryptoJS from 'crypto-js';
import { isExpo, getRandomBytes, Buffer } from '../utils/expo-modules';

export default function generateRandomBytes(): string {
  if (isExpo) {
    // @ts-ignore
    const u8 = getRandomBytes(96);
    // @ts-ignore
    const buffer = Buffer.from(u8);
    const bytes = buffer.toString('base64');

    return bytes;
  }

  const buffer = CryptoJS.lib.WordArray.random(96);
  const bytes = buffer.toString(CryptoJS.enc.Base64);

  return bytes;
}
