import { randomBytes } from 'crypto';

export default function generateRandomBytes(): string {
  const buffer = randomBytes(96);
  const bytes = buffer.toString('base64');

  return bytes;
}
