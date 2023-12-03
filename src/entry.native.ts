import { NativeModules } from 'react-native';
import pkceChallenge from './pkce-challenge';

const { PkceChallenge } = NativeModules;

if (PkceChallenge && typeof PkceChallenge.install === 'function') {
  PkceChallenge.install();
}

export default pkceChallenge;
