import { base64UrlEncode, generateChallenge } from './utils';
import generateRandomBytes from './generate-random-bytes';
import type { IChallenge } from './utils';

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
