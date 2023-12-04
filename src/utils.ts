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

export function fallbackRandomBase64String(byteLength: number) {
  const u8 = new Uint8Array(byteLength);
  let r: number;

  u8.map((_, i) => {
    if ((i & 0x03) === 0 || r === undefined) r = Math.random() * 0x100000000;
    return (r >>> ((i & 0x03) << 3)) & 0xff;
  });

  const bytes = base64.encode(String.fromCharCode(...new Uint8Array(u8)));

  return bytes;
}

export { BYTE_LENGTH };
