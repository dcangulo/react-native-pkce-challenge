# React Native PKCE Challenge
[![Package version](https://img.shields.io/npm/v/react-native-pkce-challenge?style=for-the-badge)](https://www.npmjs.com/package/react-native-pkce-challenge)
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-hotpink.svg?style=for-the-badge)](https://github.com/drophive/react-native-pkce-challenge/pulls)

Proof Key for Code Exchange (PKCE) challenge generator for React Native.

## Installation
### Web / iOS / Android
```bash
yarn add react-native-pkce-challenge
```

If you're going to use `asyncPkceChallenge` on **iOS/Android** you also need to do the following.
```bash
yarn add react-native-randombytes

cd ios; pod install; cd .. # iOS Only
```

## Usage
### Asynchronous (Recommended for iOS/Android)
```js
import {asyncPkceChallenge} from 'react-native-pkce-challenge'

const challenge = await asyncPkceChallenge()
```

The asynchronous module uses asynchronous [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) for web and [`react-native-randombytes`](https://github.com/mvayngrib/react-native-randombytes) for native apps.

### Synchronous (Not recommended for iOS/Android)
```js
import {pkceChallenge} from 'react-native-pkce-challenge'

const challenge = pkceChallenge()
```

The synchronous module uses synchronous [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) for web and [`CryptoJS.lib.WordArray.random`](https://cryptojs.gitbook.io/docs/) for native apps.

The constant `challenge` will hold an object like the following:
```js
{
  codeChallenge: 'XsRstqNrXT76Iop3uMoyyCQmaGthJbKKJwXBSoQXaRk',
  codeVerifier: 'OZOHUwLddiPyTFJulnUYnU9jsf7oyULflbFpwj40bE9S77iaeisGvzvaVvvPE7oO-xaV4skxwKDFBBV7JofVNxCgUSauqUDVcVjggE4-M6zthVUmeUrSAHatmIBm_P0_'
}
```

### Why asynchronous is recommended for iOS/Android?
[CryptoJS (version 3.3.0)](https://github.com/brix/crypto-js/tree/3.3.0) uses `Math.random()` which gives an output that is not cryptographically secure. [Click this for more info.](https://security.stackexchange.com/questions/181580/why-is-math-random-not-designed-to-be-cryptographically-secure.)

In web this is not a problem since we are using [`crypto.randomBytes`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) which can give us cryptographically secure values.

## Upgrading
See [UPGRADING.md](UPGRADING.md)

## Changelogs
See [CHANGELOGS.md](CHANGELOGS.md)

## References
* https://github.com/crouchcd/pkce-challenge
* https://gist.github.com/tonyxu-io/21eb57ab2a4aeb2a3ee10f77542abe64
* https://github.com/aaronpk/pkce-vanilla-js
* https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce
* https://github.com/doorkeeper-gem/doorkeeper/wiki/Using-PKCE-flow

## License
Copyright © 2020 David Angulo, released under the MIT license, see [LICENSE](LICENSE).
