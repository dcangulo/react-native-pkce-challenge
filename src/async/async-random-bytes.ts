import { randomBytes } from 'crypto';

export default function generateRandomBytes() {
  return new Promise<string>((resolve) => {
    randomBytes(96, (_err, buffer) => {
      const bytes = buffer.toString('base64');

      resolve(bytes);
    });
  });
}
