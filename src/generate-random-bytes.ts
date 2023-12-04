import { BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  if (typeof window !== 'undefined') {
    const buffer = window.crypto.getRandomValues(new Uint8Array(BYTE_LENGTH));
    const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));

    return bytes;
  }

  const buffer = require('crypto').randomBytes(BYTE_LENGTH);
  const bytes = buffer.toString('base64');

  return bytes;
}
