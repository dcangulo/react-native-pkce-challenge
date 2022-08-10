import { randomBytes } from 'crypto';
import { BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  const buffer = randomBytes(BYTE_LENGTH);
  const bytes = buffer.toString('base64');

  return bytes;
}
