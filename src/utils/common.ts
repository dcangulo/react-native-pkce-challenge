import CryptoJS from 'crypto-js';

export interface IChallenge {
  codeChallenge: string;
  codeVerifier: string;
}

export function base64UrlEncode(str: string) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

export function generateChallenge(verifier: string) {
  const hash = CryptoJS.SHA256(verifier).toString(CryptoJS.enc.Base64);

  return base64UrlEncode(hash);
}
