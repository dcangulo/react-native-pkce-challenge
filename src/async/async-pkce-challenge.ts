import { base64UrlEncode, generateChallenge } from '../utils/common';
import generateRandomBytes from './async-random-bytes';
import type { IChallenge } from '../utils/common';

function generateVerifier() {
  return new Promise<string>((resolve) => {
    generateRandomBytes().then((bytes) => {
      resolve(base64UrlEncode(bytes));
    });
  });
}

export default function asyncPkceChallenge() {
  return new Promise<IChallenge>((resolve) => {
    generateVerifier().then((verifier) => {
      const challenge = generateChallenge(verifier);

      resolve({
        codeChallenge: challenge,
        codeVerifier: verifier,
      });
    });
  });
}
