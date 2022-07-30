// @ts-ignore
import { NativeModules } from 'react-native';
import asyncPkceChallenge from './async/async-pkce-challenge';
import pkceChallenge from './sync/sync-pkce-challenge';

const { RandomBytes } = NativeModules;

if (RandomBytes && typeof RandomBytes.install === 'function') {
  RandomBytes.install();
}

export { asyncPkceChallenge, pkceChallenge };
