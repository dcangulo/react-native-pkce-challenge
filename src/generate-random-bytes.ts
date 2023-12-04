import { BYTE_LENGTH } from './utils';

export default function generateRandomBytes(): string {
  const buffer = window.crypto.getRandomValues(new Uint8Array(BYTE_LENGTH));
  const bytes = btoa(String.fromCharCode(...new Uint8Array(buffer)));

  return bytes;
}
