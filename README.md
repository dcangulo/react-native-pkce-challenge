# React Native PKCE Challenge
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge)](https://github.com/drophive/react-native-pkce-challenge/pulls)

Proof Key for Code Exchange (PKCE) challenge generator for React Native.

This module uses [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) for web and [`react-native-randombytes`](https://github.com/mvayngrib/react-native-randombytes) for native apps.

## Installation
### Native (iOS / Android)
```bash
yarn add react-native-pkce-challenge react-native-randombytes
cd ios; pod install; cd .. # iOS Only
```

### Web
```bash
yarn add react-native-pkce-challenge
```

## Usage
```js
import pkceChallenge from 'react-native-pkce-challenge'

const challenge = await pkceChallenge()
```

It will return:
```js
{
  codeChallenge: 'XsRstqNrXT76Iop3uMoyyCQmaGthJbKKJwXBSoQXaRk',
  codeVerifier: 'OZOHUwLddiPyTFJulnUYnU9jsf7oyULflbFpwj40bE9S77iaeisGvzvaVvvPE7oO-xaV4skxwKDFBBV7JofVNxCgUSauqUDVcVjggE4-M6zthVUmeUrSAHatmIBm_P0_'
}
```

## Test
```bash
yarn test
```

## References
* https://github.com/crouchcd/pkce-challenge
* https://gist.github.com/tonyxu-io/21eb57ab2a4aeb2a3ee10f77542abe64
* https://github.com/aaronpk/pkce-vanilla-js
* https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce
* https://github.com/doorkeeper-gem/doorkeeper/wiki/Using-PKCE-flow

## License
Copyright © 2020 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
