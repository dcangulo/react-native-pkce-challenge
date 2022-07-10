import { base64UrlEncode, generateChallenge } from '../utils/common';
import generateRandomBytes from './sync-random-bytes';
import type { IChallenge } from '../utils/common';

function generateVerifier(): string {
  const bytes = generateRandomBytes();

  return base64UrlEncode(bytes);
}

export default function pkceChallenge(): IChallenge {
  const verifier = generateVerifier();
  const challenge = generateChallenge(verifier);

  return {
    codeChallenge: challenge,
    codeVerifier: verifier,
  };
}
