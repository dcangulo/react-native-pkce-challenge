// @ts-ignore
import { NativeModules } from 'react-native';
import pkceChallenge from './pkce-challenge';

const { RandomBytes } = NativeModules;

if (RandomBytes && typeof RandomBytes.install === 'function') {
  RandomBytes.install();
}

export default pkceChallenge;
