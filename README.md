# React Native PKCE Challenge
[![Package version](https://img.shields.io/npm/v/react-native-pkce-challenge?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/react-native-pkce-challenge)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000000)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge&labelColor=000000)](https://github.com/dcangulo/react-native-pkce-challenge/pulls)

Proof Key for Code Exchange (PKCE) challenge generator for React Native.

## API Compatibility
|Platform  |Support
|:---------|:------
|iOS       |🟢
|Android   |🟢
|Web       |🟢
|Windows   |🟡
|macOS     |🟢
|Expo      |🟢
|Node.js   |🟢

## Installation
```bash
yarn add react-native-pkce-challenge
npx pod-install ios # iOS Only
npx pod-install macos # macOS Only
```

## Usage
### Generate PKCE Challenge Pair
```js
import pkceChallenge from 'react-native-pkce-challenge';

const challenge = pkceChallenge();
```

The constant `challenge` will hold an object like the following:
```js
{
  codeChallenge: 'XsRstqNrXT76Iop3uMoyyCQmaGthJbKKJwXBSoQXaRk',
  codeVerifier: 'OZOHUwLddiPyTFJulnUYnU9jsf7oyULflbFpwj40bE9S77iaeisGvzvaVvvPE7oO-xaV4skxwKDFBBV7JofVNxCgUSauqUDVcVjggE4-M6zthVUmeUrSAHatmIBm_P0_'
}
```
### Generate Challenge
```js
import { generateChallenge } from 'react-native-pkce-challenge';

generateChallenge(challenge.codeVerifier) === challenge.codeChallenge; // true
```

### Verify Challenge
```js
import { verifyChallenge } from 'react-native-pkce-challenge';

verifyChallenge(challenge.codeVerifier, challenge.codeChallenge); // true
verifyChallenge(challenge.codeVerifier, 'invalid challenge'); // false
```

## Upgrading
See [UPGRADING.md](UPGRADING.md)

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## License
Copyright © 2023 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
