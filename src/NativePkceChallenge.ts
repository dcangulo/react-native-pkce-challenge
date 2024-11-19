import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getRandomBase64String(byteLength: number): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PkceChallenge');
