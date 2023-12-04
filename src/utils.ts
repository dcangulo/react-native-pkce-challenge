import { sha256 } from 'js-sha256';
import base64 from 'base-64';

const BYTE_LENGTH = 96;

export interface IChallenge {
  codeChallenge: string;
  codeVerifier: string;
}

export function base64UrlEncode(str: string) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/[=]/g, '');
}

export function generateChallenge(verifier: string) {
  const digest = sha256.digest(verifier);
  const hash = base64.encode(String.fromCharCode(...new Uint8Array(digest)));

  return base64UrlEncode(hash);
}

export function verifyChallenge(verifier: string, challenge: string) {
  const correctChallenge = generateChallenge(verifier);

  return correctChallenge === challenge;
}

export function getRandomBase64StringFallback(byteLength: number) {
  console.warn('Native getRandomValues function not found. Falling back to insecure Math.random.');

  const buffer = new Uint8Array(byteLength).map(() => Math.floor(Math.random() * 256));
  const bytes = base64.encode(String.fromCharCode(...new Uint8Array(buffer)));

  return bytes;
}

export { BYTE_LENGTH };
